import { Pie } from "@ant-design/plots";
import colors from "tailwindcss/colors";

export function TechChart() {
  return (
    <Pie
      data={[
        {
            label: "TypeScript",
            value: 20,
            color: colors.sky[400],
            stroke: colors.sky[500],
          },
          {
            label: "JavaScript",
            value: 20,
            color: colors.yellow[300],
            stroke: colors.amber[400],
          },
        {
          label: "Tailwind CSS",
          value: 20,
          color: colors.blue[600],
          stroke: colors.blue[800],
        },
        {
          label: "Java",
          value: 20,
          color: colors.blue[400],
          stroke: colors.blue[600],
        },
        {
          label: "SQL",
          value: 20,
          color: colors.pink[600],
          stroke: colors.pink[800],
        },
        {
          label: "ReactJS",
          value: 20,
          color: colors.cyan[400],
          stroke: colors.cyan[600],
        },
        {
          label: "React Native",
          value: 20,
          color: colors.sky[800],
          stroke: colors.sky[950],
        },
        {
          label: "PostgreSQL",
          value: 20,
          color: colors.blue[400],
          stroke: colors.blue[600],
        },
        {
          label: "MySQL)",
          value: 20,
          color: colors.orange[400],
          stroke: colors.amber[600],
        },
        {
          label: ".NET",
          value: 20,
          color: colors.orange[600],
          stroke: colors.orange[800],
        },
        {
            label: "Python",
            value: 20,
            color: colors.yellow[500],
            stroke: colors.yellow[600],
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
