import { projectService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProjects = async (req, res) => {
  const records = await projectService.getAllProjects();
  return res.status(200).send(records);
};

const getProject = async (req, res) => {
  const record = await projectService.getProjectById(req.params.projectId);
  if (!record) {
    throw new AppError("Projeto não encontrado.", 404);
  }
  return res.status(200).send(record);
};

const getProjectsByProfile = async (req, res) => {
  const records = await projectService.getProjectsByProfileId(req.params.profileId);
  return res.status(200).send(records);
};

const createProject = async (req, res) => {
  const record = await projectService.createProject(req.body);
  return res.status(201).send(record);
};

const updateProject = async (req, res) => {
  const record = await projectService.updateProject(req.params.projectId, req.body);
  if (!record) {
    throw new AppError("Projeto não encontrado.", 404);
  }
  return res.status(200).send(record);
};

const deleteProject = async (req, res) => {
  const record = await projectService.deleteProject(req.params.projectId);
  if (!record) {
    throw new AppError("Projeto não encontrado.", 404);
  }
  return res.status(200).send({ message: "Projeto removido com sucesso." });
};

export default {
  getProjects,
  getProject,
  getProjectsByProfile,
  createProject,
  updateProject,
  deleteProject,
};
