using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using SoftLine.Test1.Web.Models;

namespace SoftLine.Test1.Web.Controllers
{
    public class ContactController : Controller
    {
        private ApplicationDbContext _context;

        public ContactController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Contacts()
        {
            return Json(await _context.Contacts.ToListAsync());
        }

        [HttpGet]
        public async Task<ActionResult> SaveContact(int? id)
        {
            var model = new Contact();
            if (id != null)
            {
                model = await _context.Contacts.FirstOrDefaultAsync(x => x.Id == id);
            }
            return Json(model);
        }

        [HttpPost]
        public async Task<ActionResult> SaveContact([FromBody] Contact model)
        {
            if (model.Id != default(int))
            {
                _context.Contacts.Update(model);
            }
            else
            {
                model.Number = GetNextNumber();
                _context.Contacts.Add(model);
            }

            await _context.SaveChangesAsync();

            return Json(model);
        }

        [HttpPost]
        public async Task<ActionResult> DeleteContact([FromBody] Contact model)
        {
            if (model.Id != default(int))
            {
                _context.Contacts.Remove(model);
                await _context.SaveChangesAsync();
            }
            
            return Json(model);
        }

        #region

        private string GetNextNumber()
        {
            int numberZone = 1;
            var dateZone = DateTime.Now.ToString("yyMM");

            var last = _context.Contacts.LastOrDefault();
            if (last != null && !string.IsNullOrWhiteSpace(last.Number))
            {
                var lastNumberZones = last.Number.Split('-');
                if (dateZone == lastNumberZones[0])
                {
                    numberZone = Convert.ToInt32(lastNumberZones[1]) + 1;
                }
            }

            var strNumber = $"{dateZone}-{string.Format("{0:000000}", numberZone)}-SL";
            return strNumber;
        }

        #endregion
    }
}
