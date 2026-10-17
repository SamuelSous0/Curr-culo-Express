import { academicExperienceService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getAcademicExperiences = async (req, res) => {
  const records = await academicExperienceService.getAllAcademicExperiences();
  return res.status(200).send(records);
};

const getAcademicExperience = async (req, res) => {
  const record = await academicExperienceService.getAcademicExperienceById(req.params.academicExperienceId);
  if (!record) {
    throw new AppError("Experiência acadêmica não encontrada.", 404);
  }
  return res.status(200).send(record);
};

const getAcademicExperiencesByProfile = async (req, res) => {
  const records = await academicExperienceService.getAcademicExperiencesByProfileId(req.params.profileId);
  return res.status(200).send(records);
};

const createAcademicExperience = async (req, res) => {
  const record = await academicExperienceService.createAcademicExperience(req.body);
  return res.status(201).send(record);
};

const updateAcademicExperience = async (req, res) => {
  const record = await academicExperienceService.updateAcademicExperience(req.params.academicExperienceId, req.body);
  if (!record) {
    throw new AppError("Experiência acadêmica não encontrada.", 404);
  }
  return res.status(200).send(record);
};

const deleteAcademicExperience = async (req, res) => {
  const record = await academicExperienceService.deleteAcademicExperience(req.params.academicExperienceId);
  if (!record) {
    throw new AppError("Experiência acadêmica não encontrada.", 404);
  }
  return res.status(200).send({ message: "Experiência acadêmica removida com sucesso." });
};

export default {
  getAcademicExperiences,
  getAcademicExperience,
  getAcademicExperiencesByProfile,
  createAcademicExperience,
  updateAcademicExperience,
  deleteAcademicExperience,
};
