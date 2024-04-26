import { REST, Routes } from "discord.js";
import ExtendedRest from "./extendedRest";

/**
 * DeployGuildCommands class handles deploying slash commands globally.
 */
export default class DeployGlobalCommands {
  private rest: REST;       // Instance of the REST class for making API requests
  private token: string;    // Authentication token for accessing the Discord API

  /**
   * Constructor for the DeployGuildCommands class.
   * @param token - The authentication token for accessing the Discord API.
   */
  constructor(token: string) {
    this.token = token;
    this.rest = new ExtendedRest(token); // Initializes the REST instance using ExtendedRest
  }

  /**
   * Deploys slash commands globally.
   * @param commands - An array of slash commands to be deployed.
   */
  async deploySlashCommands(commands: {}[]): Promise<void> {
    try {
      // Makes a PUT request to deploy slash commands globally
      await this.rest.put(
        Routes.applicationCommands(this.token),
        { body: commands }
      );
    } catch (error) {
    }
  }
}
