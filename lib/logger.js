
const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};

const console_color  = (color, msg, reset) => {
    return `${color}${msg}${reset}`;
};

const get_timestamp  = () => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2);
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    const year = date_ob.getFullYear();
    const hours = ("0" + date_ob.getHours()).slice(-2);
    const minutes = ("0" + date_ob.getMinutes()).slice(-2);
    const seconds = ("0" + date_ob.getSeconds()).slice(-2);
  
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};

const sleep_and_print = async (time, msg) => { 
    await new Promise(r => setTimeout(r, time)); 
    console.log(msg);
}

const print_error = (owner, tag, msg) =>{
    const timestamp   = get_timestamp();
    let console_text  = console_color("\x1b[37m", `[`, "\x1b[0m");
        console_text += console_color("\x1b[32m", `${owner.toUpperCase()}`, "\x1b[0m");
        console_text += console_color("\x1b[37m", `] `, "\x1b[0m");
        console_text += console_color("\x1b[36m", `${timestamp} `, "\x1b[0m");
        console_text += console_color("\x1b[33m", `${tag.toUpperCase()} `, "\x1b[0m");
        console_text += console_color("\x1b[37m", `${msg} `, "\x1b[0m");
        console_text += console_color("\x1b[31m", `Error`, "\x1b[0m");
        console.log(console_text);
};

const print_log = (owner, tag, msg, status) =>{
    const timestamp = get_timestamp();
    let console_text  = console_color("\x1b[37m", `[`, "\x1b[0m");
        console_text += console_color("\x1b[32m", `${owner.toUpperCase()}`, "\x1b[0m");
        console_text += console_color("\x1b[37m", `] `, "\x1b[0m");
        console_text += console_color("\x1b[36m", `${timestamp} `, "\x1b[0m");
        console_text += console_color("\x1b[33m", `${tag.toUpperCase()} `, "\x1b[0m");
        console_text += console_color("\x1b[37m", `${msg} `, "\x1b[0m");
        console_text += console_color("\x1b[32m", `${status}`, "\x1b[0m");
        console.log(console_text);
};

const use = (app,tag) => {
    const sleep_time = 5;
    
    app.use( ( req, res, next ) => {
        res.on( 'finish', () => {
            const timestamp = get_timestamp();

            var ip = req.headers['x-real-ip'] || (req.headers['x-forwarded-for'] || '').split(',')[0] || (req.socket.remoteAddress || '').split(`:`).pop() || (req.connection.remoteAddress || '').split(`:`).pop();

            let console_text  = console_color(colours.fg.white, `[`, colours.reset);
                console_text += console_color(colours.fg.green, `${tag}`, colours.reset);
                console_text += console_color(colours.fg.white, `] `, colours.reset);
                console_text += console_color(colours.fg.cyan, `${timestamp} `, colours.reset);
                console_text += console_color(colours.fg.yellow, `${req.method} `, colours.reset);
                console_text += console_color(colours.fg.green, `${ip} `, colours.reset);
                console_text += console_color(colours.fg.white,  `${req.protocol}://${req.get('host')}${req.originalUrl} `, colours.reset);
                console_text += console_color(res.statusCode == 200 ? colours.fg.green : colours.fg.red,  `${res.statusCode} `, colours.reset);
    
            sleep_and_print(sleep_time, console_text);
    
            if(req._body){
                console_text  = console_color(colours.fg.white, `[`, colours.reset);
                console_text += console_color(colours.fg.green, `${tag}`, colours.reset);
                console_text += console_color(colours.fg.white, `] `, colours.reset);
                console_text += console_color(colours.fg.cyan, `${timestamp} `, colours.reset);
                console_text += console_color(colours.fg.yellow, `BODY `, colours.reset);
                console_text += console_color(colours.fg.green, `${ip} `, colours.reset);
                console_text += console_color(colours.fg.white,  `${JSON.stringify(req.body)} `, colours.reset);
                sleep_and_print(sleep_time, console_text);
            }
        });
        next();
    });
};

module.exports = { use, get_timestamp, colours, console_color, print_error, print_log };