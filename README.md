# 🚀 CodeRefiner – AI-Powered Code Reviewer  

I built **CodeRefiner**, an AI-powered **code reviewer** using the **Google Gemini API**.  
Users can paste their code into the editor, and the app will generate:  
- 🐞 **Issues** – Detect bugs, bad practices, and errors.  
- ⚡ **Improvements** – Suggest refactoring and performance enhancements.  
- 📘 **Explanations** – Provide detailed insights about the code.  

---

## 🎨 UI Preview  

### 🖊️ Code Editor  
 <img width="1294" height="634" alt="Screenshot from 2025-09-02 09-53-16" src="https://github.com/user-attachments/assets/9da9735b-cdaf-4fb4-b11e-68c5f3829976" />


### 📄 AI Review Panel  
Get instant feedback, issues, and improvements rendered beautifully in **Markdown**.  
<img width="1294" height="634" alt="Screenshot from 2025-09-02 09-54-31" src="https://github.com/user-attachments/assets/f84251b3-3c34-48b3-a43a-11972b3c8cc7" />

---

## 🛠️ How It Works  

1. ✍️ User pastes or writes code inside the editor.  
2. 🤖 On clicking **Review**, the code is sent to **Google Gemini API**.  
3. 📊 The API analyzes and returns a detailed **review report**.  
4. 🖼️ The review is displayed in a **Markdown-styled panel**.  

---

## 📦 Installation  

Run the following commands to install the required dependencies:  

```bash
npm install axios
npm install prismjs
npm install react
npm install react-dom
npm install react-markdown
npm install react-simple-code-editor
npm install rehype-highlight
