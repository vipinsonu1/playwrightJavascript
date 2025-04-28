import {test,locator} from "@playwright/test"
import { request } from "http";

test("fetching table data", async({page})=>{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   const table = await page.locator("//div[@class='tableFixHead']/table");
   const tblColm= await table.locator("thead tr th");
   const tblrow= await table.locator("tbody tr");
   const colCount= await tblColm.count();
   const rowCount= await tblrow.count();
   console.log(colCount + "    " + rowCount);
   await table.scrollIntoViewIfNeeded();
   const mathcrow = await tblrow.filter({has: await page.locator("td"), hasText:"Chennai"});
   console.log("matched row : ", await mathcrow.count());
   for(let i=1; i< (await mathcrow.count()); i++){
      const text= await mathcrow.locator("td:first-child").allTextContents();
      console.log("gfgfgh   ", text)
   }
});

test("dropdown test",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await page.locator("#dropdown-class-example").click();
     await page.locator("#dropdown-class-example").selectOption('option1');
     await page.locator("#dropdown-class-example").selectOption({index:2});
     await page.locator("#dropdown-class-example").selectOption({value:"option3"});
     await page.waitForTimeout(5000);
});

test("api practice",async({request})=>{
      const responce= await request.post("https://reqres.in/api/users",{data:{
            "name": "morpheus",
            "job": "leader"
      },headers:{
      }

      });
      console.log(await responce.json());


});
