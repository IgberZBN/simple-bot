import { REST } from "discord.js";

/**
 * ExtendedRest class extends the REST class from discord.js
 * to provide additional functionality.
 */
export default class ExtendedRest extends REST {
  /**
   * Constructor for the ExtendedRest class.
   * @param token - The authentication token for accessing the Discord API.
   */
  constructor(token: string) {
    // Calls the constructor of the REST class
    super();

    // Sets the token for authentication
    this.setToken(token);
  }
}
