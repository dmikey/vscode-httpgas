import * as vscode from "vscode";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  // Register the Sidebar Panel
  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "HttpGas-sidebar",
      sidebarProvider
    )
  );

  // Register a custom command
  // context.subscriptions.push(vscode.commands.registerCommand('HttpGas.commandname', () => {
  // 	// code here...
  // }));

  context.subscriptions.push(
    vscode.commands.registerCommand("HttpGas.sayhello", () => {
      vscode.window.showInformationMessage("Hello World!");
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
