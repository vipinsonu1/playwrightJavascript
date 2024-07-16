import {test, expect} from "@playwright/test"
import Logger, { logger } from "../utils/logger"

test('this checking the logger',async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logoeee/www");
    Logger.debug("this debug message")
})