# urlbar-results-tester
 Registers one result of each type in the Firefox address bar for testing purposes.

## Instructions
You can skip steps 1 and 2 below by downloading the pre-made .zip add-on in the Releases section.

1. Clone this repo and install the dependencies.
2. `web-ext build`
3. In Firefox, set the pref `extensions.experiments.enabled` to `true`. Then open about:debugging.
4. Install the .zip file created by `web-ext build` as a temporary add-on.
5. Your Urlbar results will now be spoofed. To toggle this behaviour on and off, click the browser action in the toolbar.
