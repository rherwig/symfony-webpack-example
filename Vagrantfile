# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "puphpet/ubuntu1604-i386"

  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "10.10.10.10"
  config.vm.synced_folder ".", "/var/www/vagrant"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

  config.vm.provision :shell, path: "deployment/bootstrap.sh"
end
