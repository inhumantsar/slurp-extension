# Slurp Browser Extension

Provides convenient a one-click method for sending pages to Slurp, the plugin for Obsidian that makes it easy to save web pages as clean, easy-to-read Markdown.

## How does it work?

When you click the Slurp extension button, it will grab the URL from your active tab and invoke Obsidian using its custom URI. For example, if you're looking at an article on Medium that you would like to save and click the button, it will open a new browser tab and point it at a url like `obsidian://slurp?url=https://medium.com/...`. From there, Obsidian will pass that URL to the Slurp plugin. Slurp will then read the page, strip it of irrelevant elements like ads and navbars, then convert it to Markdown and save it to your vault.

If you don't already have Slurp for Obsidian, [check it out](https://github.com/inhumantsar/slurp).

## Installation

While the Slurp for Obsidian plugin is in the pre-release phase, the extension must be installed manually. Simply download the appropriate package below and open it with your web browser:

* [Firefox](https://addons.mozilla.org/firefox/downloads/file/4262151/709cda0d800c4eacbd85-1.0.0.xpi)
* Chrome (Soon™️)

## Roadmap

- [ ] Edit content, metadata, and tags prior to slurping
- [ ] View, search, and revisit the original source for slurped pages
- [ ] Get quick access to related slurped pages right in your web browser

## Privacy

No data is sent to any third-parties at any point. The URL is passed directly to your local Obsidian installation and all processing is handled locally.

## Development

This was built with the [Vite Web Extension plugin](https://vite-plugin-web-extension.aklinker1.io/) and NPM. The easiest way to get going while ensuring dependency isolation is to use the included `direnv` configuration. 

### Requirements

* Ubuntu and Ubuntu on WSL2 are supported, though it should work on any OS with NodeJS installed.
* NodeJS v21 and NPM v10 -- if you do not already have these, then `direnv` is recommended. See below.
* A modern web browser which supports Manifest v2 or Manifest v3, tested on Chrome v123 and Firefox v124
* [Optional] [direnv](https://direnv.net/) 

### Clone

```
git clone https://github.com/inhumantsar/slurp-extension
```

### direnv (optional)

There is a `direnv` config which can be used to quickly configure a completely isolated local environment. Setting it up requires a few extra steps though.

1. Install the [Nix package manager](https://nixos.org/download/#nix-install-linux)
2. Ensure `flakes` and `nix-command` are enabled, eg: `mkdir -p ~/.local/nix && echo "experimental-features = nix-command flakes" >> nix.conf`
2. Install `direnv`, adjusting or removing `bin_path` as needed: `curl -sfL https://direnv.net/install.sh | bin_path=~/.local/bin bash`
    * [Official installation guide](https://direnv.net/docs/installation.html)
    * Note that the official Ubuntu packages are out-of-date and as such, they are *not* recommended.
3. `direnv` will instruct you to add a line to your `.bashrc`, once that's done, run `direnv allow` from the repository root directory.

### Building

```
npm install              # not required if using direnv
npm run build-chrome     # firefox users can run `build-firefox` instead
```

This will use Vite to package the extension and create a zip file in the repository's root directory containing the extension files.

## License

[MIT](./LICENSE)