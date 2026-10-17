import { profileService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProfiles = async (req, res) => {
  const profiles = await profileService.getAllProfiles();
  return res.status(200).send(profiles);
};

const getProfile = async (req, res) => {
  const profile = await profileService.getProfileById(req.params.profileId);
  if (!profile) {
    throw new AppError("Perfil não encontrado.", 404);
  }
  return res.status(200).send(profile);
};

const createProfile = async (req, res) => {
  const profile = await profileService.createProfile(req.body);
  return res.status(201).send(profile);
};

const updateProfile = async (req, res) => {
  const profile = await profileService.updateProfile(req.params.profileId, req.body);
  if (!profile) {
    throw new AppError("Perfil não encontrado.", 404);
  }
  return res.status(200).send(profile);
};

const deleteProfile = async (req, res) => {
  const profile = await profileService.deleteProfile(req.params.profileId);
  if (!profile) {
    throw new AppError("Perfil não encontrado.", 404);
  }
  return res.status(200).send({ message: "Perfil removido com sucesso." });
};

export default {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
