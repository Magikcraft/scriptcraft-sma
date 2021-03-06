"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandMap = {
    start: {
        description: 'Start a server',
        name: 'start',
        startDefinitions: [
            {
                name: 'test',
                alias: 't',
                type: Boolean,
            },
            {
                name: 'profile',
                alias: 'p',
                type: String,
            },
            {
                name: 'exit',
                alias: 'e',
                description: 'Exit after test completion',
                type: Boolean,
            },
            {
                name: 'file',
                alias: 'f',
                description: 'JSON definition file to use',
                type: String,
            },
            {
                name: 'verbose',
                alias: 'v',
                description: 'Verbose require debugging',
                type: Boolean,
            },
        ],
    },
    stop: {
        description: 'Stop a server',
        name: 'stop',
        stopDefinitions: [
            {
                name: 'file',
                alias: 'f',
                description: 'JSON definition file to use',
                type: String,
            },
            {
                name: 'profile',
                type: String,
                defaultOption: true,
            },
        ],
    },
    status: {
        description: 'Get the status of a server',
        name: 'status',
    },
    list: {
        description: 'List running SMA servers',
        name: 'list',
    },
    info: {
        description: 'Inspect a running server',
        name: 'info',
    },
    logs: {
        description: 'View logs for a server',
        name: 'logs',
    },
    restart: {
        description: 'Restart the server',
        name: 'restart',
    },
};
