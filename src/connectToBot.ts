import { Client, GatewayIntentBits } from "discord.js";

/*
* Class that extends the Client class from discord.js to establish a connection to a Discord bot.
*/
export default class ConnectToBot extends Client {
  /**
   * Constructor of the ConnectToBot class.
   * @param token - The authentication token of the bot.
   * @param intents - The desired intents for the bot.
   */
  constructor(token: string, intents: GatewayIntentBits[]) {
    // Calls the constructor of the Client class with the provided intents
    super({ intents: intents });

    // Initiates the bot connection using the provided token
    this.login(token);
  }
}
