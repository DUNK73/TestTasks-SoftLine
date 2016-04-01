using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace SoftLine.Test1.Web.Models
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Contact> Contacts { get; set; } 
    }
}
