import { ChatModel } from './chatModel';
import { ChatView } from './chatView';
import { ChatController } from './chatController';

const model = new ChatModel();
const view = new ChatView();
const controller = new ChatController(model, view);