import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'ns-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  lista: Cliente[] = [];
  itemSelecionado?: Cliente;

  form: FormGroup = this.fb.group({
    tipoPessoa: ['F',[]],
    cpfCnpj:['',[]],
    nomeCompleto :['',[]],
    nomeUsual :['',[]],
    dataCriacao: ['',[]],
    contribuinte: ['',[]],
    inscricaoEstadual: ['',[]],
    inscricaoMunicipal: ['',[]],
    email:['',[]],
    grupo:['',[]]
  })


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {


    this.form.valueChanges.subscribe(valor => {
      if(this.itemSelecionado){
        Object.assign(this.itemSelecionado,valor)
      }
    })
  }

  resetForm(c?:Cliente){
    if(c){
      this.form.reset({
        tipoPessoa : c.tipoPessoa,
        cpfCnpj:c.cpfCnpj,
        nomeCompleto : c.nomeCompleto,
        nomeUsual : c.nomeUsual,
        dataCriacao: c.dataCriacao,
        contribuinte: c.contribuinte,
        inscricaoEstadual: c.inscricaoEstadual,
        inscricaoMunicipal: c.inscricaoMunicipal,
        email: c.email,
        grupo:c.grupo
      })
    }else{
      this.form.reset()
    }

  }

  selecionar(cliente: Cliente){
    if(cliente === this.itemSelecionado){
      this.itemSelecionado = undefined;
      this.resetForm()

    }else{
      this.itemSelecionado = cliente
      this.resetForm(cliente)
    }
    this.itemSelecionado = cliente;
  }

  adicionarCliente(){
    this.lista.push({
      tipoPessoa: 'F',
      cpfCnpj:'123.323.213.12',
      nomeCompleto:'Novo',
      nomeUsual:'Wesley',
      dataCriacao: new Date(),
      contribuinte: 'N',
      inscricaoEstadual: '299999999.11',
      inscricaoMunicipal: '33990001.12',
      email: 'wes@gmail.com',
      grupo:'12'
    })
  }

}
