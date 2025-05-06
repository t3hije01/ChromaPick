# ChromaPick (Color Picker Widget)

**ChromaPick** is a lightweight and user-friendly application built with Electron. It allows users to pick colors, view their HEX values, explore popular color palettes, toggle between light and dark modes, and save the last 10 used colors. This widget is perfect for designers, developers, and anyone working with colors.

---

## Features
- **Color Picker**: Select colors and instantly view their HEX values.
- **Popular Palettes**: Browse popular color palettes fetched from ColourLovers.
- **Dark Mode**: Toggle between light and dark themes.
- **Clipboard Copy**: Copy the selected color's HEX value to the clipboard.
- **Customizable**: Easily modify the widget to suit your needs.

---

## Installation

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

### Steps to Initialize and Run the Widget Locally

1. **Clone the Repository**:
   Open a terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/colorpicker-widget.git
   ```

2. **Navigate to the Project Directory**:
   Change into the project directory:
   ```bash
   cd colorpicker-widget
   ```

3. **Install Dependencies**:
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

4. **Install Electron Locally**:
   Install Electron as a local dependency:
   ```bash
   npm install electron
   ```

5. **Start the Widget**:
   Launch the widget with the following command:
   ```bash
   npx electron .
   ```

---

## Usage
1. **Pick a Color**:
   - Use the color picker to select a color.
   - The selected color will be displayed in the widget, along with its HEX value.

2. **Explore Popular Palettes**:
   - Click the "See popular colorthemes and palettes" button to fetch and display popular palettes.
   - Scroll through the list of popular color palettes fetched from ColourLovers.
   - Click on a color swatch to apply it to the color picker.

3. **Toggle Dark Mode**:
   - Click the "Toggle Dark Mode" button to switch between light and dark themes.

5. **Copy HEX Value**:
   - Click on the color box to copy the HEX value to the clipboard.

6. **Close the Widget**:
   - Click the "X" button in the top-right corner to close the widget.

---

## Packaging the Widget (Optional)
If you'd like to package the widget as a standalone application for distribution, follow these steps:

1. **Install Electron Packager**:
   Install the `electron-packager` globally:
   ```bash
   npm install -g electron-packager
   ```

2. **Package the Application**:
   Run the following command to package the app:
   ```bash
   electron-packager . ColorPickerWidget --platform=win32 --arch=x64 --out=dist --overwrite
   ```
   - Replace `win32` with your platform (`darwin` for macOS, `linux` for Linux).
   - The packaged app will be available in the `dist` folder.

3. **Run the Packaged App**:
   Navigate to the `dist` folder and run the executable file.

---

## Acknowledgments
- [Electron](https://www.electronjs.org/) for providing the framework.
- [ColourLovers](http://www.colourlovers.com/) for the color palette API.

