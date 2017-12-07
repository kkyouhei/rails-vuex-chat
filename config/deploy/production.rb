set :branch, 'master'
# TODO modify server ip address user
server 'ip address', user: 'user name', roles: %w[web app db]
set :ssh_options, {
  keys: %w(~/.ssh/id_rsa),
  forward_agent: true,
  auth_methods: %w(publickey)
}