import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const IdentifierLengthTester = () => {
  const [identifier, setIdentifier] = useState('');
  const [language, setLanguage] = useState('c');

  const limits = {
    c: { limit: 63, name: 'C99+', warning: 31, warningText: 'C89 only uses first 31 chars' },
    cpp: { limit: 255, name: 'C++', warning: null },
    java: { limit: 65535, name: 'Java', warning: 100, warningText: 'Consider shorter for readability' },
    python: { limit: 500, name: 'Python', warning: 79, warningText: 'PEP 8 recommends shorter' },
    javascript: { limit: 1000, name: 'JavaScript', warning: 50, warningText: 'Consider shorter for tools' },
    sql_mysql: { limit: 64, name: 'MySQL', warning: null },
    sql_postgres: { limit: 63, name: 'PostgreSQL', warning: null },
    sql_oracle_old: { limit: 30, name: 'Oracle (pre-12.2)', warning: null },
    sql_oracle_new: { limit: 128, name: 'Oracle (12.2+)', warning: null },
    sql_server: { limit: 128, name: 'SQL Server', warning: null }
  };

  const currentLimit = limits[language];
  const length = identifier.length;
  const isValid = length <= currentLimit.limit;
  const hasWarning = currentLimit.warning && length > currentLimit.warning;

  const getStatus = () => {
    if (length === 0) return null;
    if (!isValid) return 'error';
    if (hasWarning) return 'warning';
    return 'success';
  };

  const status = getStatus();

  const examples = {
    valid: 'user_account_balance',
    warning: 'this_is_a_somewhat_long_identifier_that_might_need_refactoring_for_better_readability',
    error: 'this_is_an_extremely_long_variable_name_that_definitely_exceeds_most_reasonable_compiler_limits_and_should_never_be_used_in_production_code_because_it_makes_everything_completely_unreadable'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Identifier Length Limit Tester
          </h1>
          <p className="text-slate-600 mb-6">
            Test if your identifier exceeds language-specific limits
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Language/Platform
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="c">C99+</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="sql_mysql">MySQL</option>
              <option value="sql_postgres">PostgreSQL</option>
              <option value="sql_oracle_old">Oracle (pre-12.2)</option>
              <option value="sql_oracle_new">Oracle (12.2+)</option>
              <option value="sql_server">SQL Server</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Enter Identifier
            </label>
            <textarea
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Type or paste your identifier here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              rows="3"
            />
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-600">Current Length</p>
                <p className="text-2xl font-bold text-slate-800">{length}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">
                  {currentLimit.name} Limit
                </p>
                <p className="text-2xl font-bold text-slate-800">
                  {currentLimit.limit}
                </p>
              </div>
            </div>

            {length > 0 && (
              <div className="relative pt-1">
                <div className="overflow-hidden h-4 text-xs flex rounded-full bg-slate-200">
                  <div
                    style={{ width: `${Math.min((length / currentLimit.limit) * 100, 100)}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-300 ${
                      status === 'error' ? 'bg-red-500' :
                      status === 'warning' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                  />
                </div>
              </div>
            )}
          </div>

          {status && (
            <div className={`rounded-lg p-4 mb-6 flex items-start space-x-3 ${
              status === 'error' ? 'bg-red-50 border border-red-200' :
              status === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
              'bg-green-50 border border-green-200'
            }`}>
              {status === 'error' && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
              {status === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
              {status === 'success' && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
              <div>
                <p className={`font-semibold ${
                  status === 'error' ? 'text-red-800' :
                  status === 'warning' ? 'text-yellow-800' :
                  'text-green-800'
                }`}>
                  {status === 'error' && 'Error: Identifier Too Long'}
                  {status === 'warning' && 'Warning: Consider Shortening'}
                  {status === 'success' && 'Valid Identifier Length'}
                </p>
                <p className={`text-sm mt-1 ${
                  status === 'error' ? 'text-red-700' :
                  status === 'warning' ? 'text-yellow-700' :
                  'text-green-700'
                }`}>
                  {status === 'error' && 
                    `Exceeds ${currentLimit.name} limit by ${length - currentLimit.limit} characters`
                  }
                  {status === 'warning' && currentLimit.warningText}
                  {status === 'success' && 
                    `Within ${currentLimit.name} limits (${currentLimit.limit - length} characters remaining)`
                  }
                </p>
              </div>
            </div>
          )}

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Quick Examples
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => setIdentifier(examples.valid)}
                className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
              >
                <p className="text-sm font-medium text-green-800">Valid Length</p>
                <p className="text-xs text-green-600 font-mono mt-1">{examples.valid}</p>
              </button>
              <button
                onClick={() => setIdentifier(examples.warning)}
                className="w-full text-left px-4 py-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors"
              >
                <p className="text-sm font-medium text-yellow-800">Warning Length</p>
                <p className="text-xs text-yellow-600 font-mono mt-1 truncate">{examples.warning}</p>
              </button>
              <button
                onClick={() => setIdentifier(examples.error)}
                className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors"
              >
                <p className="text-sm font-medium text-red-800">Error Length</p>
                <p className="text-xs text-red-600 font-mono mt-1 truncate">{examples.error}</p>
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              Best Practices
            </h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
              <li>Keep identifiers concise but descriptive</li>
              <li>Use 2-4 words maximum for variable names</li>
              <li>Follow language-specific naming conventions</li>
              <li>Consider code readability over verbosity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifierLengthTester;