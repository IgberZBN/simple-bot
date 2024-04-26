import { REST, Routes } from "discord.js";
import ExtendedRest from "./extendedRest";

/**
 * DeployGuildCommands class handles deploying slash commands to a specific guild.
 */
export default class DeployGuildCommands {
  private rest: REST;       // Instance of the REST class for making API requests
  private guildID: string;  // ID of the guild where commands will be deployed
  private token: string;    // Authentication token for accessing the Discord API

  /**
   * Constructor for the DeployGuildCommands class.
   * @param token - The authentication token for accessing the Discord API.
   * @param guildID - The ID of the guild where commands will be deployed.
   */
  constructor(token: string, guildID: string) {
    this.token = token;
    this.rest = new ExtendedRest(token); // Initializes the REST instance using ExtendedRest
    this.guildID = guildID;
  }

  /**
   * Deploys slash commands to the specified guild.
   * @param commands - An array of slash commands to be deployed.
   */
  async deploySlashCommands(commands: {}[]): Promise<void> {
    try {
      // Makes a PUT request to deploy slash commands to the guild
      await this.rest.put(
        Routes.applicationGuildCommands(this.token, this.guildID),
        { body: commands }
      );
    } catch (error) {
    }
  }
}


