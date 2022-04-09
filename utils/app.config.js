import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const MAP_KEY = publicRuntimeConfig?.MAP_KEY;
