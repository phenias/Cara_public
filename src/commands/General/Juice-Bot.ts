import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'juice-bot',
            description: `Get juice-bot's repo`,
            aliases: ['juice-bot'],
            category: 'general',
            usage: `${client.config.prefix}juice-bot`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        
        return void M.reply( await request.buffer(`https://www.digitalartsonline.co.uk/cmsdata/slideshow/3441290/6.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `*juice-bot*: *https://github.com/phenias/Cara_public*\n *If you like the bot please star my repo*`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}

