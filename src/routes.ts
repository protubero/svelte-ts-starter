import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import About from "./components/About.svelte";
import NotFound from "./components/NotFound.svelte";
import TodoListSvelte from "./components/TodoList.svelte";
import ArticleList from "./components/ArticleList.svelte";
import PlainTextEditor from "./components/PlainTextEditor.svelte";

export const routes = {
  // Exact path
  "/": Home,
  "/about": About,
  "/articles": ArticleList,
  "/plaintexteditor": PlainTextEditor,
  // Exact path + parameter
  "/article/:title": Article,
  "/todos": TodoListSvelte,
  // Wildcard
  "*": NotFound
};