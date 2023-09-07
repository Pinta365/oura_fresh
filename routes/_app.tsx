import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>oura_fresh</title>
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="/pico.min.css"/>
            </head>
            <body>
                <div class="container">
                    <Component />
                </div>
            </body>
        </html>
    );
}
