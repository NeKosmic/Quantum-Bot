const fs = require('fs')
const chalk = require('chalk')
const MyPkg = require('../../package.json')
const MyInfo = JSON.parse(fs.readFileSync('./informacion.json'))

exports.PanelMenu = (prefix, pushname, actividad, role, monospace, nwn, isPrremium) => {
  return `${monospace}< [ ${MyInfo.NombreDelBot} ] >${monospace}
╔═══════════
║❂ Tiempo activo : ${actividad}
║❂ Version del bot : ${MyPkg.version}
║❂ Dueño : ${MyInfo.CoCreador}
║❂ Prefijo : 「  ${prefix}  」
║❂ Cliente : ${pushname}️
║❂ Premium : ${isPrremium ? "Si" : "No"}
║❂ Rol del Cliente : ${role}
╚═══════════
${nwn}
~|-------------------------|~
⮕ *_COMANDOS_  ☷*
~|-------------------------|~

╔═══════════
║ _CONVERSORES :_
║╭——————————
║├ ${prefix}sticker
║├ ${prefix}tiendaimg
║├ ${prefix}aimg
║├ ${prefix}inframundo
║├ ${prefix}nightcore
║├ ${prefix}happyhardcore
║├ ${prefix}ardilla
║├ ${prefix}superveloz
║├ ${prefix}demonio
║├ ${prefix}lento
║├ ${prefix}distorcionado
║├ ${prefix}aumentarbajo
║├ ${prefix}amp3
║├ ${prefix}acelerarvid
║├ ${prefix}lentovid
║├ ${prefix}reversavid
║├ ${prefix}rescom
║╰——————————
╚═══════════
╔═══════════
║ _CMDS-CASUAL :_
║╭——————————
║├ ${prefix}miperfil
║├ ${prefix}informacion
║├ ${prefix}apoyo
║├ ${prefix}baneados
║├ ${prefix}miwasa
║├ ${prefix}milimite
║├ ${prefix}minivel
║├ ${prefix}estadobot
║├ ${prefix}creador
║├ ${prefix}infogrupo
║├ ${prefix}admins
║├ ${prefix}grupolink
║├ ${prefix}tienda
║├ ${prefix}horario
║├ ${prefix}keyaudio
║╰——————————
╚═══════════
╔═══════════
║ _JUEGOS :_
║╭——————————
║├ ${prefix}quien
║├ ${prefix}ruleta
║├ ${prefix}tragamoneda
║├ ${prefix}calumnia
║├ ${prefix}dados
║├ ${prefix}dado
║├ ${prefix}emparejar
║├ ${prefix}top5
║├ ${prefix}top10
║├ ${prefix}testgay
║├ ${prefix}votacion
║├ ${prefix}vervotos
║├ ${prefix}reiniciarvotos
║├ ${prefix}afk
║╰——————————
╚═══════════
╔═══════════
║ _CMDS ADMINS :_
║╭——————————
║├ ${prefix}cgpen
║├ ${prefix}agp
║├ ${prefix}editnamegp
║├ ${prefix}editdesgp
║├ ${prefix}fotogrupo
║├ ${prefix}invocar
║├ ${prefix}darpoder
║├ ${prefix}quitarpoder
║├ ${prefix}ban
║├ ${prefix}activos
║╰┬> _ACTIVADORES_
║╭╯
║├ ${prefix}modofull
║├ ${prefix}animeuwu
║├ ${prefix}hmodo
║├ ${prefix}nivelear
║├ ${prefix}wlc
║├ ${prefix}antitraba
║├ ${prefix}antilink
║├ ${prefix}antilink2
║├ ${prefix}antifakes
║├ ${prefix}antifakes2
║├ ${prefix}antiextranjeros
║╰┬> _JUEGOS_
║╭╯
║├ ${prefix}deathnote
║╰——————————
╚═══════════
╔═══════════
║ _CMDS DUEÑO :_
║╭——————————
║├ ${prefix}modo1
║├ ${prefix}modo2
║├ ${prefix}antiprivado
║├ ${prefix}predit
║├ ${prefix}nombrebot
║├ ${prefix}midueño
║├ ${prefix}misredes
║├ ${prefix}editarlimite
║├ ${prefix}darpremium
║├ ${prefix}nopremium
║├ ${prefix}neoqr
║├ ${prefix}perfilbot
║├ ${prefix}suprimir
║├ ${prefix}bcgc
║├ ${prefix}bc
║├ ${prefix}banear
║├ ${prefix}quitarbaneo
║├ ${prefix}.
║├ ${prefix}lenguaje
║╰┬> _ACTIVADORES_
║╭╯
║├ ${prefix}chatbot
║├ ${prefix}banchat
║╰┬> ~MODO KUAKER~
║ ~PSDT- Estos comandos son de virustraba~
║ ~ten cuidado al usarlos!~
║╭╯
║├ ${prefix}c1
║╰┬> _AVANZADO_
║╭╯
║├ =>
║├ >
║├ $
║╰——————————
╚═══════════
╔═══════════
║ _MAS COMANDOS EXTRA :_
║╭——————————
║├ ${prefix}mascmds
║├ ${prefix}randmenu
║├ ${prefix}crealogos
║├ ${prefix}mianime
║├ ${prefix}labiblia
║╰——————————
╚═══════════
`
}
exports.FooterPM = (CovidApi) => {
  return `┏「 DATOS - COVID19 」─┓
┃➲ Casos positivos : ${CovidApi.cases}
┃✯ Recuperados : ${CovidApi.recovered}
┃❥ Tratados : ${CovidApi.active}
┃✞ Fallecidos : ${CovidApi.deaths}
┗─━─━ 「 🌎 」 ━─━─┛`
}
exports.PanelMenu2 = (prefix, monospace) => {
  return `${monospace}[ MENU-RANDOM ]${monospace}
 
╔═══════════
║
║➣ ${prefix}verip
║➣ ${prefix}gruposwa
║➣ ${prefix}vos
║➣ ${prefix}simi
║➣ ${prefix}covid
║➣ ${prefix}clima
║➣ ${prefix}github
║➣ ${prefix}traductor
║➣ ${prefix}pinterest
║➣ ${prefix}imagen
║➣ ${prefix}google
║➣ ${prefix}wikipedia
║➣ ${prefix}playstore
║➣ ${prefix}letra
║➣ ${prefix}xd
║➣ ${prefix}perros
║➣ ${prefix}gatos
║➣ ${prefix}pato
║➣ ${prefix}wallpaper
║➣ ${prefix}tiktok
║
╠═> DESCARGADOR
║➣ ${prefix}mediafire
║➣ ${prefix}audio
║➣ ${prefix}play
║➣ ${prefix}play2
║➣ ${prefix}ytmp3
║➣ ${prefix}ytmp4
║➣ ${prefix}fbdl
║➣ ${prefix}tiktokdl
║➣ ${prefix}tiktokdl2
║
╠═> PASATIEMPO
║➣ ${prefix}preguntame
║➣ ${prefix}v_o_f
║➣ ${prefix}notificacion
║➣ ${prefix}tumama
║➣ ${prefix}comediante
║➣ ${prefix}consejo
║➣ ${prefix}randimg
║➣ ${prefix}djbot
║➣ ${prefix}minidatos
║➣ ${prefix}frasesamor
║➣ ${prefix}minombre
╚═══════════
`
}
exports.MenuArte = (prefix, monospace) => {
  return `${monospace}[ CREA-LOGOS ]${monospace}
 
╔═══════════
║☞ ${prefix}attp
║☞ ${prefix}halloween
║☞ ${prefix}lava
║☞ ${prefix}toxico
║☞ ${prefix}metalrojo
║☞ ${prefix}tormenta
║☞ ${prefix}gneon
║☞ ${prefix}neontxt
║☞ ${prefix}arcoiris
║☞ ${prefix}hielo
║☞ ${prefix}lapiz
║☞ ${prefix}roca3d
║☞ ${prefix}ficcion
║☞ ${prefix}romper
║☞ ${prefix}sangre
║☞ ${prefix}gameover
║☞ ${prefix}pornhub
╚═══════════
`
}
exports.AniMenu = (prefix, monospace) => {
  return `${monospace}[ ANIME-MENU ]${monospace}
 
╔═══════════
║圆 ${prefix}himnootaku
║圆 ${prefix}reconime
║圆 ${prefix}name?
║圆 ${prefix}anifrase
║圆 ${prefix}waifu
║圆 ${prefix}waifuhd
║圆 ${prefix}facehd
║圆 ${prefix}aniwpp
║圆 ${prefix}neko
║圆 ${prefix}snime
║圆 ${prefix}otakutest
╚═══════════
`
}
exports.MenuH = (prefix, monospace) => {
  return `${monospace}[ MENU +18 ]${monospace}
 
╔═══════════
║㋡ ${prefix}hentai
║㋡ ${prefix}hwaifu
║㋡ ${prefix}hneko
║㋡ ${prefix}traph
║㋡ ${prefix}lewd
║㋡ ${prefix}lewdk
║㋡ ${prefix}cum_jpg
║㋡ ${prefix}pussy_jpg
║㋡ ${prefix}feet
║㋡ ${prefix}lewdkemo
║㋡ ${prefix}solo
║㋡ ${prefix}avatar
║㋡ ${prefix}nsfw_avatar
║㋡ ${prefix}erokemo
║㋡ ${prefix}ero
║㋡ ${prefix}hololewd
║㋡ ${prefix}tits
║㋡ ${prefix}eroyuri
║㋡ ${prefix}yuri
║㋡ ${prefix}keta
║㋡ ${prefix}eron
║㋡ ${prefix}erok
║㋡ ${prefix}erofeet
║㋡ ${prefix}femdom
║㋡ ${prefix}futanari
╚═══════════
`
}
exports.BanCall = (helpcall) => {
  return `Las llamadas al numero del bot estan prohibidos!\nPongase en contacto con mi dueño : ${helpcall}`
}
exports.FDeG = () => {
  return `\n\nEl numero del bot fue eliminado de un grupo!\n\n`
}
exports.AutoSaludo = () => {
  return `*_Joder, mi creador principal se unio al grupo_ ✓*\n*[ Se bienvenido nwn ]*`
}
exports.Wlc1 = () => {
  return `Regalame una estrella`
}
exports.Wlc2 = () => {
  return `Creador`
}
exports.Wlc3 = (num, metadata, fechaCompleta, gpdesc, nwn, nvn) => {
  return `⚡ *Bienvenid@ @${num.split("@")[0]} a este grandioso grupo :*\n${metadata.subject}\n⚡ *Fecha de ingreso : ${fechaCompleta}*\n⚡ _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n*Normas del grupo actualmente :* \n${nwn}\n${gpdesc}`
}
exports.Wlc4 = () => {
  return `ADIOS... 😔`
}
exports.Wlc5 = (num) => {
  return `[ ! ] C fue alv : @${num.split("@")[0]}`
}
exports.NoSpam1 = () => {
  return `*Espere unos segundos antes de usar otro comando ✓*`
}
exports.NoSpam2 = (pushname) => {
  return `[ ! ] ${pushname} Por favor no sature al bot ;-;`
}
exports.NoReg = (pushname) => {
  return `[ ! ] ${pushname} Debe de registrarse para comenzar a usar al bot`
}
exports.PreFijo = () => {
  return `Prefijo:`
}
exports.Erreply = () => {
  return `*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] ${pushname} Su límite para usar al bot se agotaron ;-;*\nSi sube de nivel se le regalarán : ~+3 de limite~\n_~ᴬˡ ᶜʳᵉᵃᵈᵒʳ ᵈᵉˡ ᵇᵒᵗ ⁿᵒ ˡᵉ ᵃᶠᵉᶜᵗᵃʳᵃ ᵉˡ ˡᶦᵐᶦᵗᵉ~_ `
}
exports.Limite = (pushname) => {
  return `*┏━━⊱ 「 LIMITE 」*
*┗⊱ _${pushname} Tu limite restante es_*`
}
exports.NivelUp = (fechaCompleta, senderNumber, getLevel, getLevelingLevel, sender, per, getLevelingXp, role, role2) => {
  return `「 ⚡ACTUALIZACION DE NIVEL⚡  」\n\n➸ *Fecha* : ${fechaCompleta}\n➸ *Usuario* : ${senderNumber}\n➸ *Nivel* : ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Progreso de nivel : ${per}*\n➸ *XP* : ${getLevelingXp(sender)}\n➸ *De acuerdo a tu XP pasas a ser* : ${role}\n➸ *Nivel de poder* : ${role2}\n\n⚡ *Bonificación por subir de nivel :*\n_[ + 3 de límite ]_`
}
exports.MinGp1 = () => {
  return `Para más información comuníquese con `
}
exports.MinGp2 = () => {
  return `*[ ! ] Lo siento, minimo de miembros requeridos en el grupo debe ser :*`
}
exports.NoTraba1 = () => {
  return `Un administrador acaba de enviar texto que contiene muchos caracteres -.-`
}
exports.NoTraba2 = (saltos, eliminar, pushname) => {
  return `Marcar el chat como leido ✓\n${saltos}\n=> El número : ${eliminar}\n=> Alias : ${pushname}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`
}
exports.NoPriv = (privcre) => {
  return `[ ! ] El chat por privado esta prohibido [ ! ]\nMi dueño por si necesita ayuda : ${privcre}`
}
exports.NoLinks1 = () => {
  return `Joder, lo weno es que el enlace detectado es de este grupo owo`
}
exports.NoLinks2 = () => {
  return `[ ! ] Este usuario no puede ser eliminado`
}
exports.NoLinks3 = () => {
  return `Por suerte no soy acmin, asi que no puedo expulsarte :v`
}
//♻️//
exports.Pong = (conexiont) => {
  return `Velocidad de respuesta : ${conexiont} Milisegundos`
}
exports.NoReg2 = (prefix) => {
  return `*[ ! ] No estas registrado en mi base de datos*\n\n_Ejemplo para registrarse_ :\n${prefix}rg TuNombre|TuEdad`
}
exports.SoloGp = () => {
  return `*[ ! ] Este comando solo se puede usar en grupos*`
}
exports.SoloAdm = () => {
  return `*[ ! ] Este comando solo puede ser usado por los administradores*`
}
exports.YaActivo = (command) => {
  return `El comando ${command} ya estuvo activo en este grupo`
}
exports.YaActivoSi = (command, groupName) => {
  return `*${command} activado en el grupo* : ${groupName}`
}
exports.YaActivoNo = (command, groupName) => {
  return `*${command} desactivado en el grupo* : ${groupName}`
}
exports.ActiVar = () => {
  return `ACTIVAR [✓]`
}
exports.DesActiVar = () => {
  return `DESACTIVAR [X]`
}
exports.AdminBot = () => {
  return `*[ ! ] El bot tiene que ser administrador*`
}
exports.SoloCreador = () => {
  return `*[ ! ] Este comando solo puede ser usado por el dueño del bot*`
}
//⚡//
exports.Modo0 = () => {
  return `[ MODO 1 ]`
}
exports.Modo1 = () => {
  return `PRIVADO 🔒`
}
exports.Modo2 = () => {
  return `PUBLICO 🔓`
}
exports.Modo3 = () => {
  return `Modo publico activado, ahora todos los participantes podran usar al bot`
}
exports.Modo4 = () => {
  return `Modo privado activado, ahora solo el dueño del bot podra usarlo`
}
exports.ModNet0 = () => {
  return `[ MODO 2 ]`
}
exports.ModNet1 = () => {
  return `SIN-LINEA 🚫`
}
exports.ModNet2 = () => {
  return `EN-LINEA 🌐`
}
exports.ModNet3 = () => {
  return `Bot modo En-Linea, ahora todos los comandos estan disponibles`
}
exports.ModNet4 = () => {
  return `Bot modo Sin-Linea, ahora solo algunos comandos estaran disponibles`
}
exports.NoPriv0 = () => {
  return `[ ANTI-PRIVADO ]`
}
exports.NoPriv1 = () => {
  return `SI-PRIVADOS 📳`
}
exports.NoPriv2 = () => {
  return `NO-PRIVADOS 📴`
}
exports.NoPriv3 = () => {
  return `Modo Anti-Privado desactivado`
}
exports.NoPriv4 = () => {
  return `Modo Anti-Privado activado, ahora todo aquel que hable al bot por privado sera bloqueado`
}
//✍️//
exports.PreDit0 = () => {
  return `*[ ! ] Escriba solo un simbolo o numero*`
}
exports.PreDit1 = () => {
  return `*[ ! ] Solo se acepta un digito para el prefijo [ ! ]*`
}
exports.PreDit2 = () => {
  return `El prefijo fue alterado correctamente ✓\nPrefijo nuevo:`
}
exports.NomBot0 = () => {
  return `*[ ! ] Escriba un nombre o apodo*`
}
exports.NomBot1 = () => {
  return `*[ ! ] El nombre debe contener 15 caracteres como maximo [ ! ]*`
}
exports.NomBot2 = () => {
  return `El nombre del bot fue alterado correctamente ✓\nNombre nuevo:`
}
exports.PrinCre0 = () => {
  return `*[ ! ] Escriba su nombre o apodo*`
}
exports.PrinCre1 = () => {
  return `*[ ! ] El nombre debe contener 25 caracteres como maximo [ ! ]*`
}
exports.PrinCre2 = () => {
  return `El nombre del dueño fue alterado correctamente ✓\nNombre nuevo:`
}
exports.MyRed0 = () => {
  return `*[ ! ] Coloque o pegue sus redes sociales*`
}
exports.MyRed1 = () => {
  return `*[ ! ] El texto debe contener 300 caracteres como maximo [ ! ]*`
}
exports.MyRed2 = () => {
  return `Se edito la informacion para redes sociales :\n`
}
exports.UsLimit0 = () => {
  return `*[ ! ] Escriba el límite que desee*\n_Limite actual para usar comandos :_`
}
exports.UsLimit1 = () => {
  return `*[ ! ] Solo se aceptan numeros*`
}
exports.UsLimit2 = () => {
  return `*[ ! ] No puede poner un valor mas bajo que*`
}
exports.UsLimit3 = () => {
  return `*[ ! ] Solo se aceptan 5 caracteres como maximo [ ! ]*`
}
exports.UsLimit4 = () => {
  return `Limite cambiado por el valor de :`
}
exports.PfBot0 = () => {
  return `Se cambio el perfil del bot con éxito`
}
exports.PfBot1 = () => {
  return `Perfil anterior : `
}
exports.ProCes = (pushname) => {
  return `_Procesando, ${pushname} por favor espere..._`
}
exports.QuImage = (prefix, command) => {
  return `Envie ó Responda una imagen con el comando ${prefix + command}`
}
//
exports.SuPrim = () => {
  return `*[ ! ] Esta accion solo puede usarse respondiendo un mensaje reciente del bot*`
}
exports.NoTexto = () => {
  return `*[ ! ] Y el texto?*`
}
exports.BcGrupos0 = (gmap) => {
  return `Enviando transmisión a ${gmap.length} grupos, Finalizando en ${gmap.length * 1.5} segundos`
}
exports.BcGrupos1 = (gmap) => {
  return `Mensaje transmitido a ${gmap.length} grupos ✓`
}
exports.BcTodos0 = (tmap) => {
  return `Transmitiendo mensaje en ${tmap.length} chats activos\nFinalizando en ${tmap.length * 1.5} segundos`
}
exports.BcTodos1 = () => {
  return `⚡ *Mensaje simultaneo compartido con exito :D*⚡`
}
exports.BanUser0 = () => {
  return `Usuario baneado`
}
exports.BanUser1 = () => {
  return `Usuario desbaneado`
}
//📝//
exports.CerrarGp0 = (pushname, prefix, command) => {
  return `*${pushname} en que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${prefix + command} 10 segundos`
}
exports.CerrarGp1 = (UwU, pushname) => {
  return `*El grupo se cerrará en ${UwU}*\n_Accion ejecutada por : ${pushname}_`
}
exports.CerrarGp2 = () => {
  return `*[ Se cerro el grupo con exito ✓ ]*`
}
exports.AbrirGp = () => {
  return `*[ Grupo abierto ✓ ]*`
}
exports.NomGp0 = () => {
  return `*[ ! ] máximo de carácteres es 25*`
}
exports.NomGp1 = (groupName) => {
  return `Se cambio el nombre del grupo con éxito ✓\nNombre nuevo : [ ${groupName} ]`
}
exports.DesGp0 = () => {
  return `*[ ! ] Máximo de carácteres 512*`
}
exports.DesGp1 = (nwn, groupDesc) => {
  return `Se cambio la descripción del grupo con éxito ✓\nNueva descripción : ${nwn}\n${groupDesc}`
}
exports.PfGp0 = () => {
  return `Se cambio el perfil del grupo con éxito`
}
exports.PfGp1 = () => {
  return `Imagen anterior : `
}
//🧑‍💻//
exports.ToDos = (groupName, pushname, texto) => {
  return `⚡ *Invocando a los integrantes del grupo* : ${groupName}\n*~> Invocador* : _${pushname}_\n*~> Mensaje* : _${texto ? texto : 'No hay :v'}_\n`
}
exports.DarP = (usuariop, pushname) => {
  return `*El participante @${usuariop} fue convertido en administrador del grupo ✓*\n_Accion ejecutada por ${pushname}_`
}
exports.QuitP = (usuarioq, pushname) => {
  return `*El administrador @${usuarioq} fue degradado de ser admin ✓*\n_Accion ejecutada por ${pushname}_`
}
exports.BanSer = (adiuser, pushname) => {
  return `*El participante @${adiuser} fue eliminado del grupo ✓*\n_Accion ejecutada por ${pushname}_`
}
exports.UsEnLinea = () => {
  return `=> [ Lista de usuarios en linea ]\n=> Cantidad : `
}
//
exports.Baneao = (senderNumber) => {
  return `${senderNumber} estas baneado, ahora no podrás usar al bot :v`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] Lo siento ${pushname} te quedaste sin límites para seguir usando al bot T~T*\nˢᶦ ˢᵘᵇᵉˢ ᵈᵉ ⁿᶦᵛᵉˡ• ˢᵉ ˡᵉ ʳᵉᵍᵃˡᵃʳᵃⁿ ~⁺³ ᵈᵉ ˡᶦ́ᵐᶦᵗᵉ~`
}
exports.BotInfo = () => {
  return `[ INFO-BOT ]`
}
exports.GraciAs = () => {
  return `[ APOYO ]`
}
exports.MasCmds = () => {
  return `[ MAS COMANDOS ☰ ]`
}
exports.YaReg = () => {
  return `*[ ! ] Ya estuviste registrado en mi base de datos*`
}
exports.MyReg0 = () => {
  return `*[ ! ] Por favor agregue una barra en medio de nombre y edad*\n" | "`
}
exports.MyReg1 = () => {
  return `*[ ! ] En edad solo se aceptan números -.-*`
}
exports.MyReg2 = () => {
  return `*[ ! ] Bruh el nombre es muy largo ._.*`
}
exports.MyReg3 = () => {
  return `*[ ! ] Maximo de edad 30 años*`
}
exports.MyReg4 = () => {
  return `*[ ! ] Minimo de edad 13 años*`
}
exports.MyReg5 = (nwn, time, nomreg, pushname, edreg, sender, codereg) => {
  return `〘  *REGISTRO* 〙${nwn}\n❥Fecha y hora de Registro \n❥${time}\n┏─━─━━─━─━━─━─\n╠≽️ *Nombre Registrado : ${nomreg}*\n╠≽️ *Nombre usado en whatsapp : ${pushname}*\n╠≽️ *Edad : ${edreg}*\n╠≽️ *Nº : wa.me/${sender.split("@")[0]}*\n┗─━─━━─━─━━─━─\n_Codigo de registro_ : *${codereg}* `
}
exports.MyReg6 = () => {
  return `Que tengas un excelente día! :D`
}
exports.CmdsR0 = () => {
  return `Mas comandos`
}
exports.CmdsR1 = () => {
  return `Random-Menu`
}
exports.CmdsA0 = () => {
  return `Artístico`
}
exports.CmdsA1 = () => {
  return `Crear-Logos`
}
exports.CmdsO0 = () => {
  return `Otaku/Anime`
}
exports.CmdsO1 = () => {
  return `Random-Anime`
}
exports.CmdsH0 = () => {
  return `Hentai/Anime`
}
exports.CmdsH1 = () => {
  return `La-Biblia`
}
exports.MCmds0 = () => {
  return `Toque Aqui ⚡`
}
exports.MCmds1 = () => {
  return `Seleccione solo una opción`
}


/*
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/
