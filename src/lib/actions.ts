import { createAction, Property } from '@activepieces/pieces-framework';
import { pieceAuth } from './auth';
import { invoke } from './client';

export const seedream_decompose_image = createAction({
  name: "seedream_decompose_image",
  displayName: "Seedream Decompose Image",
  description: "Split one image into a base plus editable transparent layers.",
  auth: pieceAuth,
  props: {
    "prompt": Property.LongText({ displayName: "Elements", description: "Optional elements or <bbox> regions; omit for automatic decomposition.", required: false }),
    "image": Property.LongText({ displayName: "Image", description: "Set image. Enter a JSON array or object where applicable.", required: false }),
    "size": Property.ShortText({ displayName: "Size", description: "auto, 1K, 1.5K, or 2K.", required: false, defaultValue: "auto" }),
    "sequential_image_generation": Property.StaticDropdown({ displayName: "Sequential Image Generation", description: "Set sequential image generation.", required: false, options: { options: [{"label":"auto","value":"auto"},{"label":"disabled","value":"disabled"}] } }),
    "sequential_image_generation_options": Property.LongText({ displayName: "Sequential Image Generation Options", description: "Set sequential image generation options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "watermark": Property.Checkbox({ displayName: "Watermark", description: "Add an AI watermark.", required: false }),
    "output_format": Property.StaticDropdown({ displayName: "Base format", description: "Base jpeg/png; layers are always PNG.", required: false, options: { options: [{"label":"jpeg","value":"jpeg"},{"label":"png","value":"png"}] } }),
    "tools": Property.LongText({ displayName: "Tools", description: "Set tools. Enter a JSON array. Enter a JSON array or object where applicable.", required: false }),
    "optimize_prompt_options": Property.LongText({ displayName: "Optimize Prompt Options", description: "Set optimize prompt options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "callback_url": Property.ShortText({ displayName: "Callback Url", description: "Set callback url for this operation.", required: false }),
    "background": Property.StaticDropdown({ displayName: "Background", description: "Set background.", required: false, options: { options: [{"label":"transparent","value":"transparent"},{"label":"opaque","value":"opaque"}] } }),
  },
  async run(context) {
    return invoke("seedream_decompose_image", context.propsValue as Record<string, unknown>, context.auth.secret_text);
  },
});

export const seedream_edit_image = createAction({
  name: "seedream_edit_image",
  displayName: "Seedream Edit Image",
  description: "Edit image(s) with Ace Data Cloud Seedream Images API.",
  auth: pieceAuth,
  props: {
    "model": Property.StaticDropdown({ displayName: "Model", description: "Select a model currently supported by this API. Availability and pricing depend on the chosen model.", required: false, defaultValue: "doubao-seedream-5-0-lite-260128", options: { options: [{"label":"doubao-seedream-5-0-pro-260628","value":"doubao-seedream-5-0-pro-260628"},{"label":"doubao-seedream-5-0-lite-260128","value":"doubao-seedream-5-0-lite-260128"},{"label":"doubao-seedream-4-0-250828","value":"doubao-seedream-4-0-250828"},{"label":"doubao-seedream-4-5-251128","value":"doubao-seedream-4-5-251128"}] } }),
    "prompt": Property.LongText({ displayName: "Prompt", description: "Text prompt describing the edit.", required: false }),
    "image": Property.LongText({ displayName: "Image", description: "Set image. Enter a JSON array or object where applicable.", required: false }),
    "size": Property.ShortText({ displayName: "Size", description: "Optional image size.", required: false, defaultValue: "2K" }),
    "sequential_image_generation": Property.StaticDropdown({ displayName: "Sequential image generation", description: "Optional. Use disabled/auto depending on model support.", required: false, options: { options: [{"label":"auto","value":"auto"},{"label":"disabled","value":"disabled"}] } }),
    "sequential_image_generation_options": Property.LongText({ displayName: "Sequential Image Generation Options", description: "Set sequential image generation options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "watermark": Property.Checkbox({ displayName: "Watermark", description: "Optional. Add watermark or not.", required: false }),
    "output_format": Property.StaticDropdown({ displayName: "Output format", description: "Seedream 5.0 Pro/Lite: jpeg or png.", required: false, options: { options: [{"label":"jpeg","value":"jpeg"},{"label":"png","value":"png"}] } }),
    "tools": Property.LongText({ displayName: "Tools", description: "Set tools. Enter a JSON array. Enter a JSON array or object where applicable.", required: false }),
    "optimize_prompt_options": Property.LongText({ displayName: "Optimize Prompt Options", description: "Set optimize prompt options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "callback_url": Property.ShortText({ displayName: "Callback Url", description: "Set callback url for this operation.", required: false }),
    "layer_decomposition": Property.Checkbox({ displayName: "Layer Decomposition", description: "Set layer decomposition for this operation.", required: false }),
    "background": Property.StaticDropdown({ displayName: "Background", description: "Pro-only transparent or opaque background mode.", required: false, options: { options: [{"label":"transparent","value":"transparent"},{"label":"opaque","value":"opaque"}] } }),
  },
  async run(context) {
    return invoke("seedream_edit_image", context.propsValue as Record<string, unknown>, context.auth.secret_text);
  },
});

export const seedream_generate_image = createAction({
  name: "seedream_generate_image",
  displayName: "Seedream Generate Image",
  description: "Generate image(s) with Ace Data Cloud Seedream Images API.",
  auth: pieceAuth,
  props: {
    "model": Property.StaticDropdown({ displayName: "Model", description: "Select a model currently supported by this API. Availability and pricing depend on the chosen model.", required: false, defaultValue: "doubao-seedream-5-0-lite-260128", options: { options: [{"label":"doubao-seedream-5-0-pro-260628","value":"doubao-seedream-5-0-pro-260628"},{"label":"doubao-seedream-5-0-lite-260128","value":"doubao-seedream-5-0-lite-260128"},{"label":"doubao-seedream-4-0-250828","value":"doubao-seedream-4-0-250828"},{"label":"doubao-seedream-4-5-251128","value":"doubao-seedream-4-5-251128"}] } }),
    "prompt": Property.LongText({ displayName: "Prompt", description: "Text prompt used to generate the image(s).", required: false }),
    "image": Property.LongText({ displayName: "Image", description: "Set image. Enter a JSON array or object where applicable.", required: false }),
    "size": Property.ShortText({ displayName: "Size", description: "Optional image size like 1K/2K/4K or 2048x2048 depending on model.", required: false, defaultValue: "2K" }),
    "sequential_image_generation": Property.StaticDropdown({ displayName: "Sequential image generation", description: "Optional. Use disabled/auto depending on model support.", required: false, options: { options: [{"label":"auto","value":"auto"},{"label":"disabled","value":"disabled"}] } }),
    "sequential_image_generation_options": Property.LongText({ displayName: "Sequential Image Generation Options", description: "Set sequential image generation options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "watermark": Property.Checkbox({ displayName: "Watermark", description: "Optional. Add watermark or not.", required: false }),
    "output_format": Property.StaticDropdown({ displayName: "Output format", description: "Seedream 5.0 Pro/Lite: jpeg or png.", required: false, options: { options: [{"label":"jpeg","value":"jpeg"},{"label":"png","value":"png"}] } }),
    "tools": Property.LongText({ displayName: "Tools", description: "Set tools. Enter a JSON array. Enter a JSON array or object where applicable.", required: false }),
    "optimize_prompt_options": Property.LongText({ displayName: "Optimize Prompt Options", description: "Set optimize prompt options. Enter a JSON object. Enter a JSON array or object where applicable.", required: false }),
    "callback_url": Property.ShortText({ displayName: "Callback Url", description: "Set callback url for this operation.", required: false }),
    "layer_decomposition": Property.Checkbox({ displayName: "Layer Decomposition", description: "Set layer decomposition for this operation.", required: false }),
    "background": Property.StaticDropdown({ displayName: "Background", description: "Set background.", required: false, options: { options: [{"label":"transparent","value":"transparent"},{"label":"opaque","value":"opaque"}] } }),
  },
  async run(context) {
    return invoke("seedream_generate_image", context.propsValue as Record<string, unknown>, context.auth.secret_text);
  },
});

export const seedream_task_retrieve = createAction({
  name: "seedream_task_retrieve",
  displayName: "Seedream Retrieve Task",
  description: "Retrieve one task, optionally waiting up to 240 seconds.",
  auth: pieceAuth,
  props: {
    "task_id": Property.ShortText({ displayName: "Task ID", description: "Use the task ID or IDs returned by earlier submissions.", required: true }),
    "wait_seconds": Property.Number({ displayName: "Wait up to seconds", description: "0 queries once; 1–240 waits for the same task to finish. Pending is not complete.", required: false, defaultValue: 0 }),
  },
  async run(context) {
    return invoke("seedream_task_retrieve", context.propsValue as Record<string, unknown>, context.auth.secret_text);
  },
});

export const seedream_tasks_retrieve_batch = createAction({
  name: "seedream_tasks_retrieve_batch",
  displayName: "Seedream Retrieve Tasks",
  description: "Retrieve existing tasks by ID without repeating generation.",
  auth: pieceAuth,
  props: {
    "ids": Property.LongText({ displayName: "Ids", description: "Use the task ID or IDs returned by earlier submissions. Enter a JSON array or object where applicable.", required: true }),
  },
  async run(context) {
    return invoke("seedream_tasks_retrieve_batch", context.propsValue as Record<string, unknown>, context.auth.secret_text);
  },
});

export const actions = [seedream_decompose_image, seedream_edit_image, seedream_generate_image, seedream_task_retrieve, seedream_tasks_retrieve_batch];
