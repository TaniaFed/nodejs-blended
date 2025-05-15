import path from 'node:path';

// export const PATH_DB = path.join( 'C:', 'Users', 'ktvpo', 'Documents', 'GitHub', 'Node.js', 'nodejs-blended', 'src', 'db', 'db.json');

const pathToWorkDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json'); 
    
console.log(PATH_DB);

