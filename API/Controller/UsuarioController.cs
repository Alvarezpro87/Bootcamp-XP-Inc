using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controller


{   
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpGet("ObterDataHora")]
        public IActionResult ObeterDataHora()
        {
            var obj = new

            {
                Data = DateTime.Now.ToLongDateString(),
                Hora = DateTime.Now.ToShortTimeString()
            };

            return Ok(obj);
        }
        [HttpGet("Apresentar/{nome}")]

        public IActionResult Apresentar(string nome)
        {

            var mensagem = $"Ola {nome}, tudo bem?";
            return Ok(new { mensagem });
        }
    }
}