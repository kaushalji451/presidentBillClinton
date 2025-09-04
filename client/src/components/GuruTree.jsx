import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import lineageDataRaw from "../Lineage.json";

const cloneAndCollapse = (node, depth = 0, maxDepth = 1, collapse = false) => {
    const newNode = { ...node };
    if (newNode.sub) {
        newNode.children = newNode.sub.map(child =>
            cloneAndCollapse(child, depth + 1, maxDepth, collapse)
        );
        if (collapse && depth >= maxDepth) {
            newNode._children = newNode.children;
            newNode.children = null;
        }
    }
    return newNode;
};

const LineageTree = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [rootData, setRootData] = useState(() =>
        cloneAndCollapse(lineageDataRaw, 0, 1)
    );

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!rootData) return;

        const { width, height } = dimensions;
        const svgElement = d3.select(svgRef.current);
        svgElement.selectAll("*").remove();

        const root = d3.hierarchy(rootData, d => d.children);
        const topLevelChildrenCount = root.children ? root.children.length : 0;
        const xSpacing = topLevelChildrenCount <= 2 ? 80 : 170;
        const ySpacing = 220;
        const treeLayout = d3.tree().nodeSize([xSpacing, ySpacing]);

        treeLayout(root);
        root.each(d => {
            if (d.parent) {
                const index = d.parent.children.indexOf(d);
                d.y += index * 20;
            }
        });

        const allNodes = root.descendants();
        const treeWidth = d3.max(allNodes, d => d.x) + 600;
        const treeHeight = d3.max(allNodes, d => d.y) + 200;

        svgElement
            .attr("viewBox", `0 0 ${treeWidth} ${treeHeight}`)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .style("width", "100%")
            .style("height", `${treeHeight}px`);
        const LEFT_PADDING = 60;
        const svg = svgElement
            .append("g")// increase this if needed
        svg.attr("transform", `translate(${treeWidth / 2 - root.x + LEFT_PADDING}, 50)`);


        const IMAGE_RADIUS = 35;

        // LINK DRAWING ANIMATION
        svg
            .selectAll("path.link")
            .data(root.links())
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("fill", "none")
            .attr("stroke", "#ccc") // lighter stroke for dark background
            .attr("stroke-width", 2)
            .attr("d", d => {
                const sourceY = d.source.y + 40;
                return d3.linkVertical()
                    .x(d2 => d2.x)
                    .y(d2 => d2 === d.source ? sourceY : d2.y)(d);
            })
            .attr("stroke-dasharray", function () {
                return this.getTotalLength();
            })
            .attr("stroke-dashoffset", function () {
                return this.getTotalLength();
            })
            .transition()
            .duration(800)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);

        // NODES
        // NODES
        const nodes = svg
            .selectAll("g.node")
            .data(allNodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${d.x}, ${d.y})`)
            .style("opacity", 0);

        // Fade-in animation
        nodes
            .transition()
            .delay((d, i) => i * 100)
            .duration(500)
            .style("opacity", 1);

        // Add text first to measure width
        nodes.append("text")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle") // vertical centering
            .attr("fill", "#fff")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .text(d => d.data.name.replace(/\bMahant\b/gi, "").trim());

        // Add responsive rectangle behind text
        nodes.each(function (d) {
            const textElement = d3.select(this).select("text");
            const textWidth = textElement.node().getBBox().width;
            const textHeight = textElement.node().getBBox().height;
            const paddingX = 20;
            const paddingY = 10;

            // Draw rectangle behind text
            d3.select(this)
                .insert("rect", "text") // insert behind text
                .attr("x", -textWidth / 2 - paddingX / 2)
                .attr("y", -textHeight / 2 - paddingY / 2)
                .attr("width", textWidth + paddingX)
                .attr("height", textHeight + paddingY)
                .attr("rx", 8)
                .attr("fill", "#1E3A5F")
                .attr("stroke", "#4FC3F7")
                .attr("stroke-width", 2);
        });
    }, [dimensions, rootData]);

    return (
        <div
            ref={containerRef}
            style={{
                overflowX: "hidden",
                width: "150%",
                overflowY: "hidden",
                background: "#091D32", // solid bg as you asked
                borderRadius: "0.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
        >
            <svg ref={svgRef} />
        </div>
    );
};

export default LineageTree;
