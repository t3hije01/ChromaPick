# ChromaPick (Color Picker Widget)

**ChromaPick** is a lightweight and user-friendly application built with Electron. It allows users to pick colors, view their HEX values, and explore popular color palettes. This widget is perfect for designers, developers, and anyone working with colors.

---

## Features
- **Color Picker**: Select colors and instantly view their HEX values.
- **Popular Palettes**: Browse popular color palettes fetched from ColourLovers.
- **Customizable**: Easily modify the widget to suit your needs.
- **Lightweight**: Minimal design with a focus on functionality.

---

## Installation

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)

### Steps to Download and Run the Widget
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

4. **Start the Widget**:
   Launch the widget with the following command:
   ```bash
   npm start
   ```

---

## Usage
1. **Pick a Color**:
   - Use the color picker to select a color.
   - The selected color will be displayed in the widget, along with its HEX value.

2. **Explore Popular Palettes**:
   - Scroll through the list of popular color palettes fetched from ColourLovers.
   - Click on a color swatch to apply it to the color picker.

3. **Close the Widget**:
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

## Troubleshooting
### Common Issues
1. **`npm start` Fails**:
   - Ensure you have Node.js and npm installed.
   - Verify that you are in the correct project directory.

2. **Large File Error When Pushing to GitHub**:
   - Ensure `node_modules` is excluded from the repository by adding it to `.gitignore`.

3. **Widget Doesn't Close**:
   - Ensure the close button is properly wired to the Electron `window.close()` function.

---

## Contributing
We welcome contributions! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## Acknowledgments
- [Electron](https://www.electronjs.org/) for providing the framework.
- [ColourLovers](http://www.colourlovers.com/) for the color palette API.

