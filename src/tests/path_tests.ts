
import { testResults_append, iTestResultItem } from 'sr_core_ts';
import { testResults_consoleLog, testResults_new } from 'sr_test_framework';
import { path_dirName } from '../index.js' ;

// run main function that is declared as async. 
async_main();

// ------------------------------- async_main ---------------------------------
async function async_main()
{
  const results = path_tests( ) ;
  testResults_consoleLog( results ) ;

  return;
}

// ---------------------------------- path_tests ----------------------------------
// add and remove member from file.
function path_tests() 
{
  const results = testResults_new();

  // path_dirName
  {
    const method = 'path_dirName' ;
    const filePath = 'c:\\web\\tester\\index.ts' ;
    const dirName = path_dirName(filePath) ;
    if ( dirName == 'c:\\web\\tester')
      testResults_append( results, {desc:`dirName: ${dirName}`, method }) ;
    else
      testResults_append( results, { desc:`unexpected dirName ${dirName}`, method}) ;
  }

  return results ;
}

