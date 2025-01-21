"use client";

import { ArrowUpRightFromCircle, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { Project } from "./projects";

interface ProjectDetailsProps {
  details: Project;
  handleCloseModal: () => void;
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  details,
  handleCloseModal,
}) => {
  const {
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
  } = details;
  return (
    <section className="w-full">
      <div>
        <div className="w-full flex justify-between">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider my-3 text-slate-900 dark:text-slate-300">
            {name}
          </h1>
          <span className="cursor-pointer mt-3" onClick={handleCloseModal}>
            <X className="w-6 h-6 text-slate-900 dark:text-slate-300" />
          </span>
        </div>
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
      </div>
      <div className="my-8">
        <Image
          className="w-full h-full shadow"
          src={image.src}
          width={1920}
          height={1080}
          alt={image.title}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <p className="md:col-span-2 text-sm font-medium text-slate-800 dark:text-slate-400 my-6">
          {popupDescription}
        </p>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            {technologies.map((tech, index) => (
              <span
                className="py-1 px-3 bg-slate-100 dark:bg-blackmain1 text-xs font-medium text-slate-900 dark:text-slate-300 rounded-lg"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 my-6">
            <Link
              href={liveLink}
              target="_blank"
              className="py-2 px-6 text-sm font-medium flex items-center justify-between bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-50 rounded-lg"
            >
              <span>See Live</span>
              <ArrowUpRightFromCircle className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href={sourceLink}
              target="_blank"
              className="py-2 px-3 text-sm font-medium flex items-center justify-between bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-50 rounded-lg"
            >
              <span>See Source</span>
              <Github className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
