import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];
  public produto: Produto = new Produto(0, '', '', '', 0);

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostrarMenu(false);
  }
  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        return new Produto(
          item.id,
          item.produto,
          item.descricao,
          item.foto,
          item.preco
        );
      });
    });
  }
  public excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      (vaga) => {
        this.listarProdutos();
      },
      (err) => {
        alert('Erro ao excluir!');
      }
    );
    this._router.navigate(['/restrito/lista']);
  }
}
