# Troubleshooting

This help topic describes how to troubleshoot problems that may occur when you use Survey Creator in your application.

## React: Visualization of drag-and-drop operations is slow for large surveys

**Issue**: When you drag and drop a survey element onto or within the design surface, the UI responds slower.

**Solution**:
You may encounter this issue in large surveys. To fix it, ensure that you test your application with the minified production build of React. Refer to the following React article for more information: [Optimizing Performance: Use the Production Build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).