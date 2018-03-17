'use strict'

module.exports = {
  types: [
    { value: 'feat', name: '🌟 feat: (:star2:) A new feature' },
    { value: 'fix', name: '🐞 fix: (:beetle:) A bug fix' },
    { value: 'docs', name: '📚 docs: (:books:) Documentation only changes' },
    {
      value: 'style',
      name:
        '💅 style: (:nail_care:) Changes that do not affect the meaning of the code\n                             (white-space, formatting, missing semi-colons, etc)'
    },
    { value: 'refactor', name: '🎨 refactor: (:art:) A code change that neither fixes a bug nor adds a feature' },
    { value: 'perf', name: '🚀 perf: (:rocket:) A code change that improves performance' },
    { value: 'test', name: '🌤️ test: (:partly_sunny:) Adding missing tests' },
    {
      value: 'chore',
      name:
        '🔩 chore: (:nut_and_bolt:) Changes to the build process or auxiliary tools\n                             and libraries such as documentation generation'
    },
    { value: 'revert', name: '🚧 revert: (:poop:) Revert to a commit' },
    { value: 'WIP', name: '🔥 WIP: (:fire:) Work in progress' }
  ],

  scopes: [{ name: 'front' }, { name: 'server' }, { name: 'comp' }],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
