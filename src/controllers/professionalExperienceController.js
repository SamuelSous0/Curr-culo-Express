import { professionalExperienceService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProfessionalExperiences = async (req, res) => {
  const records = await professionalExperienceService.getAllProfessionalExperiences();
  return res.status(200).send(records);
};

const getProfessionalExperience = async (req, res) => {
  const record = await professionalExperienceService.getProfessionalExperienceById(req.params.professionalExperienceId);
  if (!record) {
    throw new AppError("Experiência profissional não encontrada.", 404);
  }
  return res.status(200).send(record);
};

const getProfessionalExperiencesByProfile = async (req, res) => {
  const records = await professionalExperienceService.getProfessionalExperiencesByProfileId(req.params.profileId);
  return res.status(200).send(records);
};

const createProfessionalExperience = async (req, res) => {
  const record = await professionalExperienceService.createProfessionalExperience(req.body);
  return res.status(201).send(record);
};

const updateProfessionalExperience = async (req, res) => {
  const record = await professionalExperienceService.updateProfessionalExperience(req.params.professionalExperienceId, req.body);
  if (!record) {
    throw new AppError("Experiência profissional não encontrada.", 404);
  }
  return res.status(200).send(record);
};

const deleteProfessionalExperience = async (req, res) => {
  const record = await professionalExperienceService.deleteProfessionalExperience(req.params.professionalExperienceId);
  if (!record) {
    throw new AppError("Experiência profissional não encontrada.", 404);
  }
  return res.status(200).send({ message: "Experiência profissional removida com sucesso." });
};

export default {
  getProfessionalExperiences,
  getProfessionalExperience,
  getProfessionalExperiencesByProfile,
  createProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience,
};
