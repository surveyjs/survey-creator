declare function getRenderedTree(story: {
    render: () => any;
    parameters: any;
}): any;
export default getRenderedTree;
