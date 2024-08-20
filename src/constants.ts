export class Constants {
  // CSS
  static readonly MODAL_MAIN_ELEM = "MAIN_WRAPPER";
  static readonly BG_DARK_CLASS = "dark-theme-bg";
  static readonly SCROLLBAR_DARK_CLASS = "scroll-dark";

  // Models
  // gpt-3.5-turbo	Currently points to gpt-3.5-turbo-0125.	16,385 tokens	4,096 tokens	Up to Sep 2021
  static readonly GPT_3_5 = "gpt-3.5-turbo";
  // gpt-4	Currently points to gpt-4-0613. See continuous model upgrades.	8,192 tokens	8,192 tokens	Up to Sep 2021
  static readonly GPT_4 = "gpt-4";
  // gpt-4-turbo	The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Currently points to gpt-4-turbo-2024-04-09.	128,000 tokens	4,096 tokens	Up to Dec 2023
  static readonly GPT_4_TURBO = "gpt-4-turbo"
  // MODEL	DESCRIPTION	CONTEXT WINDOW	MAX OUTPUT TOKENS	TRAINING DATA
  // gpt-4o	GPT-4o: Our high-intelligence flagship model for complex, multi-step tasks. GPT-4o is cheaper and faster than GPT-4 Turbo. Currently points to gpt-4o-2024-05-13 [1].	128,000 tokens	4,096 tokens	Up to Oct 2023
  static readonly GPT_4_OMNI = "gpt-4o";
  // chatgpt-4o-latest	Dynamic model continuously updated to the current version of GPT-4o in ChatGPT. Intended for research and evaluation [2].	128,000 tokens	16,384 tokens	Up to Oct 2023
  static readonly CHATGPT_4_OMNI = "chatgpt-4o-latest";
  // gpt-4o-mini	New GPT-4o-mini Our affordable and intelligent small model for fast, lightweight tasks. GPT-4o mini is cheaper and more capable than GPT-3.5 Turbo. Currently points to gpt-4o-mini-2024-07-18.	128,000 tokens	16,384 tokens	Up to Oct 2023
  static readonly GPT_4_OMNI_MINI = "gpt-4o-mini";


  static readonly GPT_3_5_MAX_TOKENS = 4096;
  static readonly GPT_4_MAX_TOKENS = 8192;
  static readonly GPT_4_TURBO_MAX_TOKENS = 128000;
  static readonly GPT_4_OMNI_MAX_TOKENS = 128000;
  static readonly CHATGPT_4_OMNI_MAX_TOKENS = 128000;
  static readonly GPT_4_OMNI_MINI_MAX_TOKENS = 128000;

  // LocalStorage Keys;
  static readonly LS_SETTINGS_KEY = "LS-SETTINGS";

  // Taken from https://platform.openai.com/docs/guides/chat/instructing-chat-models
  static readonly DEFAULT_SYS_MSG = "You are GPT, a large language model trained by OpenAI. Answer as concisely as possible.";

  // Errors
  static readonly DEFAULT_ERR_MSG = "There was an error generating the response."

  static readonly DB_INIT_ERR_MSG = "There was an error opening IndexedDB. Site may function incorrectly! \nPlease ensure your browser allows this site to store data locally."
  static readonly DB_ERR_MSG = "There was an error saving/reading from IndexedDB. Site may function incorrectly! \nPlease ensure your browser allows this site to store data locally."

  // DB
  static readonly DB_NAME = "SelfHostGPT";
  static readonly DB_VERSION = 2;
  static readonly DB_CHATS_STORE = "chats";

  // Default Messages (When you start new chat)
  static readonly TITLE = "Self-Host GPT";
  static readonly NO_API_KEY_MSG1 = "Please ensure you have entered your OpenAI APIKey in the settings"
  static readonly NO_API_KEY_MSG2 = "found at the top left of the page."
  static readonly NO_API_KEY_SELF_HOST = "If self-hosting, ensure it is set in the .env file."

  // Other
  static readonly BLANK_CHAT_ID = -1;  // Something our real chat will never have.
}
