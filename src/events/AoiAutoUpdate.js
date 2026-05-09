const { exec } = require("child_process");
const { Agent, fetch } = require("undici");
const json = require("../../package.json");
const AoiError = require("../classes/AoiError.js");

module.exports = async () => {
    try {
        const res = await fetch("https://registry.npmjs.org/better-aoi.js-fork", {
            dispatcher: new Agent({
                keepAliveTimeout: 10000,
                keepAliveMaxTimeout: 15000
            }),
            headers: {
                "User-Agent": "better-aoi.js-fork"
            }
        });

        const data = await res.json();
        if (json.version !== data["dist-tags"].latest) {
            AoiError.createConsoleMessage(
                [
                    {
                        text: "",
                        textColor: "white"
                    },
                    {
                        text: "better-aoi.js-fork is outdated!",
                        textColor: "red"
                    },
                    {
                        text: `Available version: ${data["dist-tags"].latest} ready to install.`,
                        textColor: "white"
                    },
                    {
                        text: "",
                        textColor: "white"
                    },
                    {
                        text: "Installing latest better-aoi.js-fork version...",
                        textColor: "yellow"
                    }
                ],
                "white",
                { text: "better-aoi.js-fork AutoUpdate ", textColor: "yellow" }
            );

            const Process = exec("npm i better-aoi.js-fork@latest", (error) => {
                if (error)
                    return AoiError.createConsoleMessage(
                        [
                            {
                                text: `better-aoi.js-fork AutoUpdate: ERR! ${error.message}`,
                                textColor: "red"
                            }
                        ],
                        "white",
                        { text: "better-aoi.js-fork AutoUpdate", textColor: "yellow" }
                    );

                AoiError.createConsoleMessage(
                    [
                        {
                            text: `Successfully Installed better-aoi.js-fork v${data["dist-tags"].latest}.`,
                            textColor: "white"
                        },
                        {
                            text: "",
                            textColor: "white"
                        },
                        {
                            text: "Commencing 'RESTART' in 3 seconds...",
                            textColor: "yellow"
                        }
                    ],
                    "white",
                    { text: "better-aoi.js-fork AutoUpdate  ", textColor: "yellow" }
                );

                setTimeout(Reboot, 3000);
            });
        } else {
            return;
        }
    } catch (error) {
        AoiError.createConsoleMessage(
            [
                {
                    text: "better-aoi.js-fork AutoUpdate: Unexpected error when trying to reach API.",
                    textColor: "red"
                }
            ],
            "white",
            { text: "better-aoi.js-fork AutoUpdate ", textColor: "yellow" }
        );
    }
};

function Reboot() {
    try {
        process.on("exit", () => {
            require("child_process").spawn(process.argv.shift(), process.argv, {
                cwd: process.cwd(),
                detached: true,
                stdio: "inherit"
            });
        });
        process.exit();
    } catch (e) {
        AoiError.createConsoleMessage(
            [
                {
                    text: `better-aoi.js-fork AutoUpdate: ERR! Failed to commence 'RESTART', ${e.message}`,
                    textColor: "red"
                }
            ],
            "white",
            { text: "better-aoi.js-fork AutoUpdate ", textColor: "yellow" }
        );
    }
}
