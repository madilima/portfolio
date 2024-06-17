import { Pie } from "@ant-design/plots";
import colors from "tailwindcss/colors";

export function ToolsChart() {
  return (
    <Pie
      data={[
        {
          label: "VS Code",
          value: 20,
          color: colors.blue[600],
          stroke: colors.blue[800],
        },
        {
          label: "Docker",
          value: 20,
          color: colors.blue[400],
          stroke: colors.blue[600],
        },
        {
          label: "IntelliJ IDEA",
          value: 20,
          color: colors.pink[600],
          stroke: colors.pink[800],
        },
        {
          label: "PyCharm",
          value: 20,
          color: colors.lime[400],
          stroke: colors.lime[600],
        },
        {
          label: "Postbird",
          value: 20,
          color: colors.sky[800],
          stroke: colors.sky[950],
        },
        {
          label: "GitHub",
          value: 20,
          color: colors.zinc[400],
          stroke: colors.zinc[600],
        },
        {
          label: "Npm\n(NodeJS)",
          value: 20,
          color: colors.lime[600],
          stroke: colors.lime[800],
        },
        {
          label: "Postman",
          value: 20,
          color: colors.orange[600],
          stroke: colors.orange[800],
        },
        {
          label: "Figma",
          value: 20,
          color: colors.pink[600],
          stroke: colors.pink[800],
        },
      ]}
      colorField="label"
      angleField="value"
      innerRadius={0.6}
      legend={false}
      tooltip={false}
      label={{
        text: (data: any) => {
          return data.label;
        },
        style: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
      style={{
        lineWidth: 3,
        stroke: (data: any) => {
          return data.stroke;
        },
        inset: 2,
        radius: 10,
        fill: (data: any) => {
          return data.color;
        },
      }}
    />
  );
}
