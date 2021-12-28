require('dotenv').config()

const {
    DATABASE_PROVIDER,
    DATABASE_URL,
    SESSION_SECRET,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    DISABLE_ADMIN_UI = 'false',
    ENABLE_ACCESS_CONTROL = 'false',
    DISABLE_ADMIN_CRUD_IN_ADMIN_UI = 'false',
} = process.env

module.exports = {
    app: {
        project: 'gagiel',
        authList: 'User',
        ENV: 'local',
        applicationName: 'Gagiel',
        uuid: 'gagiel',
        dropDatabase: false,
        isGraphQLCached: false,
        disableAdminUi: DISABLE_ADMIN_UI === 'true',
        enableAccessControl: ENABLE_ACCESS_CONTROL === 'true',
        disableAdminCrudInAdminUi: DISABLE_ADMIN_CRUD_IN_ADMIN_UI === 'true',
    },
    database: {
        provider: DATABASE_PROVIDER,
        url: DATABASE_URL,
    },
    sessionSetting: {
        sessionSecret: SESSION_SECRET,
        sessionMaxAge: 60 * 60 * 24 * 30, // 30 days
    },
    // sometimes we need to emit mutation request to CRUD another list in hooks,
    // however request in hooks is anonymous, may not have access permission in those list
    // so we need a top-level-access-permission account to login in hooks via graphQL
    accessControl: {
        adminEmail: ADMIN_EMAIL,
        adminPassword: ADMIN_PASSWORD,
    },
    storage: {
        // gcpUrlBase: 'https://storage.googleapis.com/static-israfel-dev/',
        // webUrlBase: 'https://dev.mnews.tw/',
        // bucket: 'static-mnews-tw-dev',
    },
}
