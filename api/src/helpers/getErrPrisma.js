export const getErrPrisma = (error) => {
    const msgSplitted = error.message.split('\n');
    const msg = msgSplitted[msgSplitted.length - 1].split(' ');
    const err = msg.slice(1, msg.length).join(' ');
    return err;
}