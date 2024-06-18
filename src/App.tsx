import { ComponentProps, useState } from "react";
import { Particles } from "./components/particles";
import { injectOneko } from "./scripts/inject-oneko";
import classNames from "classnames";
import {
  ArrowRightOutlined,
  BookOutlined,
  CheckOutlined,
  ConsoleSqlOutlined,
  DockerOutlined,
  FileDoneOutlined,
  GithubOutlined,
  InstagramOutlined,
  JavaOutlined,
  JavaScriptOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Modal, Image } from "antd";

import port from "./assets/img/port.png";
import { Subjects } from "./components/subjects";
import { Certificates } from "./components/certificates";
import { Certificate } from "./components/certificate";
import { ToolsChart } from "./components/tools-chart";
import { TechChart } from "./components/techchart";
import posttrack from "./assets/projects/img/posttrack.png";
import pizzas from "./assets/projects/img/pizzas.png";
import shopp from "./assets/projects/img/shopp.png";
import react from "./assets/projects/img/react.png";

injectOneko();

export default App;

function Section(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={classNames(
        "  w-full text-white border border-solid border-zinc-700 p-4 rounded-md",
        props.className
      )}
    />
  );
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-sans">
      <Particles />

      <div className="absolute w-full flex flex-col gap-8 p-8 overflow-y-hidden overflow-x-hidden">
        <Section className="text-center h-32">
          <div className="text-3xl ">
            I am <a className="text-teal-400">Maria Pereira</a>
            <p className="text-base">
              Systems Analysis and Development Student
            </p>
          </div>

          <div className="space-x-6 space-y-7 ">
            <a href="https://github.com/madilima" target="_blank">
              {" "}
              <GithubOutlined />{" "}
            </a>
            <a href="https://www.instagram.com/m_itsm3/" target="_blank">
              {" "}
              <InstagramOutlined />
            </a>
            <a href="https://www.linkedin.com/in/madi-pereira/" target="_blank">
              {" "}
              <LinkedinOutlined />{" "}
            </a>
            <a href="https://wa.me/5551999040062" target="_blank">
              {" "}
              <WhatsAppOutlined />{" "}
            </a>
            <MailOutlined />
          </div>
        </Section>

        <div className="flex gap-8 mt-4 items-center">
          <Section className="bg-black w-1/2 text-base">
            <div className="text-3xl text-center text-teal-400 font-semibold">
              ABOUT ME
            </div>
            <div>
              {" "}
              <p className="p-2">
                My name is Maria Pereira. Born in Caçapava do Sul on 01/28/2003,
                but currently living in São Leopoldo. At the age of 20 I started
                to become interested in creating codes and the creative freedom
                they bring. I have always enjoyed innovation and creation. I
                like working on large and small projects. I love learning new
                things, especially new languages.
              </p>
              <p className="p-2">
                I am currently a Systems Analysis and Development student, and I
                am looking for an internship opportunity in support .
              </p>
            </div>
          </Section>

          <Image src={port} />
        </div>

        <Section className="bg-black text-base mt-[10vh] h-80 flex flex-col gap-4">
          <div className="text-3xl text-center text-teal-400 font-semibold">
            EDUCATION
          </div>

          <div className="text-2xl text-center">
            Systems Analysis and Development
          </div>

          <Button
            icon={<BookOutlined />}
            className="w-48"
            shape="round"
            onClick={showModal}
          >
            Student curriculum
          </Button>

          <div className="mt-4">
            <p className="text-teal-400">
              {" "}
              <ArrowRightOutlined /> Universidade do Vale do Rio dos Sinos
            </p>
            <p>
              <ArrowRightOutlined /> Completion estimate:{" "}
              <a className="text-teal-400">2026</a>
            </p>
            <p>
              <ArrowRightOutlined /> In Systems Analysis and Development we are
              trained to develop and analyze software systems, ranging from
              conception to implementation, with a focus on innovation and
              problem solving.
            </p>
          </div>

          <Modal
            footer={null}
            title=" Curriculum Grid"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Subjects />
          </Modal>
        </Section>

        <Section className="bg-black text-base mt-[20vh] h-auto ">
          <div className="text-3xl text-center text-teal-400 font-semibold">
            {" "}
            CERTIFICATE{" "}
          </div>
          <Button
            icon={<FileDoneOutlined />}
            shape="round"
            onClick={() => setOpen(true)}
          >
            See all certificates
          </Button>
          <Modal
            footer={null}
            title="Certificates"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <Certificates />
          </Modal>
          <div className="mt-6">
            <Certificate />
          </div>
        </Section>

        <Section className=" border-none mt-[20vh] h-auto">
          <div>
            <div className="text-3xl text-center text-teal-400 font-semibold">
              {" "}
              TOOLS{" "}
            </div>
            <ToolsChart />
          </div>
        </Section>

        <Section className=" border-none mt-[20vh] h-auto">
          <div>
            <div className="text-3xl text-center text-teal-400 font-semibold">
              {" "}
              TECHNOLOGY{" "}
            </div>
            <TechChart />
          </div>
        </Section>

        <div className="flex gap-8 mt-4 items-center">
          <Section className="bg-black w-1/2 text-base">
            <div className="text-3xl text-center text-teal-400 font-semibold">
              POST TRACK
              <Image  src={posttrack} />
            </div>
            <div>
              {" "}
              <p className="p-2">
                <DockerOutlined />
              </p>
              <a className="p-2">
                <CheckOutlined /> TypeScript
              </a>
              <p>
                <a className="p-2">
                  <CheckOutlined /> Groovy
                </a>
              </p>
              <p className="p-2">
                Web application for monitoring social networks, evaluating the
                sentiment of comments and presenting reports for subsequent
                analysis.
              </p>
              <a
                className="p-2.5"
                href="https://github.com/gustavoharff/post-track"
              >
                <GithubOutlined />
              </a>
            </div>
          </Section>

          <Section className="bg-black w-1/2 text-base">
            <div className="text-3xl text-center text-teal-400 font-semibold">
              Shopping Center
              <Image src={shopp} />
            </div>
            <div>
              {" "}
              <p className="p-2">
                <JavaOutlined />
                <ConsoleSqlOutlined />
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> Java
                </a>
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> IntelliJ
                </a>
              </p>
              <p className="p-2">
                Project created 100% in Java. The system records the operation
                of a shopping mall, its stores and employee records.
              </p>
              <a
                className="p-2.5"
                href="https://github.com/madilima/shopping-center"
              >
                <GithubOutlined />
              </a>
            </div>
          </Section>
          <Section className="bg-black w-1/2 text-base">
            <div className="text-3xl text-center text-teal-400 font-semibold">
              Pizza Shopp
              <Image src={pizzas} />
            </div>
            <div>
              {" "}
              <p className="p-2">
                <JavaScriptOutlined />
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> TypeScript
                </a>
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> CSS
                </a>
              </p>
              <p className="p-2">
                Establishment registration, order management, metrics for
                dashboard, graph of orders in the last 15 days and graph of
                values over the last 15 days, and average reviews
                (month/general).
              </p>
              <a
                className="p-2.5"
                href="https://github.com/madilima/pizzashop-web"
              >
                <GithubOutlined />
              </a>
            </div>
          </Section>
          <Section className="bg-black w-1/2 text-base">
            <div className="text-3xl text-center text-teal-400 font-semibold">
              React
              <Image src={react} />
            </div>
            <div>
              {" "}
              <p className="p-2">
                <JavaScriptOutlined />
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> JavaScript
                </a>
              </p>
              <p>
                <a className="p-2">
                  <CheckOutlined /> CSS
                </a>
              </p>
              <p className="p-2">
                Project made for the community to be able to post links,
                messages, and projects, also with the option to like and
                comment.
              </p>
              <a
                className="p-2.5"
                href="https://github.com/madilima/ignite-react"
              >
                <GithubOutlined />
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
