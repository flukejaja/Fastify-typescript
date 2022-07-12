import fastify from "fastify";
export const app = fastify();
export const fs = require('fs')
export const util = require('util')
export const path = require('path')
export const { pipeline } = require('stream')
export const pump = util.promisify(pipeline)