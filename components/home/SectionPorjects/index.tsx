"use client";

import cn from "@lib/cn";
import Image from "next/image";
import { FC, useState, Fragment } from "react";
import projects, { Project } from "./projects";
import { Modal } from "@components";
import ProjectDetails from "./ProjectDetails";

interface SectionPorjectsProps {}

const SectionPorjects: FC<SectionPorjectsProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Project>({
    id: 0,
    name: "",
    description: ``,
    popupDescription: ``,
    image: { src: "", title: "" },
    meta: [""],
    technologies: [""],
    sourceLink: "",
    liveLink: "",
    className: "",
  });

  const handleShowProjectDetails = (project: Project) => {
    setOpen(true);
    setDetails(project);
  };

  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <section id="projects" className={cn("w-full h-full my-6")}>
        <div className="container mx-auto py-20">
          {projects.length &&
            projects.map(
              ({
                id,
                name,
                meta,
                description,
                technologies,
                image,
                className,
                popupDescription,
                sourceLink,
                liveLink,
              }) => (
                <div
                  key={id}
                  className={cn(
                    "bg-white dark:bg-blackmain2 p-6 mb-[88px] last:mb-[0px] flex flex-col gap-8 rounded-2xl hover:outline hover:outline-indigo-500 dark:hover:outline-slate-700",
                    className
                  )}
                >
                  <div className="w-full md:w-1/2 p-0 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wider my-3 text-slate-900 dark:text-slate-300">
                      {name}
                    </h1>
                    <div className="flex items-center">
                      {meta.map((m, index) => {
                        if (index !== 0) {
                          return (
                            <span className="flex items-center" key={index}>
                              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 mx-4"></div>
                              <span className="text-sm font-semibold text-slate-300 dark:text-slate-700">
                                {m}
                              </span>
                            </span>
                          );
                        } else {
                          return (
                            <span
                              className="text-sm font-semibold text-slate-700 dark:text-slate-400"
                              key={index}
                            >
                              {m}
                            </span>
                          );
                        }
                      })}
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-400 my-6">
                      {description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {technologies.map((tech, index) => (
                        <span
                          className="py-1 px-3 bg-slate-100 dark:bg-blackmain1 rounded-lg text-xs font-medium text-slate-900 dark:text-slate-300"
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="my-6">
                      <button
                        onClick={() => {
                          handleShowProjectDetails({
                            id,
                            name,
                            meta,
                            description,
                            technologies,
                            image,
                            className,
                            popupDescription,
                            sourceLink,
                            liveLink,
                          });
                        }}
                        className="py-2 px-6 text-sm font-medium bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-50 rounded-lg"
                      >
                        See project
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/2 max-h-[440px] overflow-hidden rounded-2xl">
                    <Image
                      className="w-full h-full object-cover rounded-2xl shadow"
                      src={image.src}
                      width={1920}
                      height={1080}
                      alt={image.title}
                    />
                  </div>
                </div>
              )
            )}
        </div>
      </section>
      <Modal isOpen={open} closeModal={handleCloseModal}>
        <ProjectDetails details={details} handleCloseModal={handleCloseModal} />
      </Modal>
    </Fragment>
  );
};

export default SectionPorjects;
