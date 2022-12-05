import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// // export { default as Button } from "./Button";
// // export { default as ThemeSettings } from "./ThemeSettings";
// // export { default as Sidebar } from "./Sidebar";
// // export { default as Navbar } from "./Navbar";
// // export { default as Footer } from "./Footer";
// // export { default as Cart } from "./Cart";
// // export { default as Chat } from "./Chat";
// // export { default as Notification } from "./Notification";
// // export { default as UserProfile } from "./UserProfile";
// // export { default as SparkLine } from "./Charts/SparkLine";
// // export { default as LineChart } from "./Charts/LineChart";
// // export { default as Stacked } from "./Charts/Stacked";
// // export { default as Pie } from "./Charts/Pie";
// // export { default as ChartsHeader } from "./ChartsHeader";
// // export { default as Header } from "./Header";

// // export { default as Ecommerce } from "./Ecommerce";
// // export { default as Kanban } from "./Kanban";
// // export { default as Orders } from "./Orders";
// // export { default as Employees } from "./Employees";
// // export { default as Editor } from "./Editor";
// // export { default as Customers } from "./Customers";
// // export { default as ColorPicker } from "./ColorPicker";
// // export { default as Calendar } from "./Calendar";
// // export { default as Area } from "./Charts/Area";
// // export { default as Bar } from "./Charts/Bar";
// // export { default as ColorMapping } from "./Charts/ColorMapping";
// // export { default as Financial } from "./Charts/Financial";
// // export { default as Line } from "./Charts/Line";
// // export { default as Pie } from "./Charts/Pie";
// // export { default as Pyramid } from "./Charts/Pyramid";
// // export { default as Stacked } from "./Charts/Stacked";

// // import React from "react";
// // import {
// //   SparklineComponent,
// //   Inject,
// //   SparklineTooltip,
// // } from "@syncfusion/ej2-react-charts";

// // class SparkLine extends React.PureComponent {
// //   render() {
// //     const { id, height, width, color, data, type, currentColor } = this.props;

// //     return (
// //       <SparklineComponent
// //         id={id}
// //         height={height}
// //         width={width}
// //         lineWidth={1}
// //         valueType="Numeric"
// //         fill={color}
// //         border={{ color: currentColor, width: 2 }}
// //         tooltipSettings={{
// //           visible: true,
// //           // eslint-disable-next-line no-template-curly-in-string
// //           format: "${x} : data ${yval}",
// //           trackLineSettings: {
// //             visible: true,
// //           },
// //         }}
// //         markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
// //         dataSource={data}
// //         xName="x"
// //         yName="yval"
// //         type={type}
// //       >
// //         <Inject services={[SparklineTooltip]} />
// //       </SparklineComponent>
// //     );
// //   }
// // }

// // export default SparkLine;

// import * as React from "react";
// import { SparklineComponent } from "@syncfusion/ej2-react-charts";
// export class App extends React.Component {
//   render() {
//     return (
//       <SparklineComponent
//         id="sparkline"
//         height="100px"
//         width="70%"
//         dataSource={[
//           { x: 0, xval: "2005", yval: 20090440 },
//           { x: 1, xval: "2006", yval: 20264080 },
//           { x: 2, xval: "2007", yval: 20434180 },
//           { x: 3, xval: "2008", yval: 21007310 },
//           { x: 4, xval: "2009", yval: 21262640 },
//           { x: 5, xval: "2010", yval: 21515750 },
//           { x: 6, xval: "2011", yval: 21766710 },
//           { x: 7, xval: "2012", yval: 22015580 },
//           { x: 8, xval: "2013", yval: 22262500 },
//           { x: 9, xval: "2014", yval: 22507620 },
//         ]}
//         xName="xval"
//         yName="yval"
//       ></SparklineComponent>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("sparkline"));
