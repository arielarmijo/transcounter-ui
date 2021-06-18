import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TranscounterService } from 'src/app/services/transcounter.service';

export interface LineNode {
  name: string;
  children?: LineNode[];
}

const TREE_DATA: LineNode[] = [
  {
    name: '502',
    children: [
      {name: 'MV3423'},
      {name: 'JO3323'},
      {name: 'KV3923'},
      {name: 'JD2320'}
    ]
  },
  {
    name: 'D02',
    children: [
      {name: 'JI3423'},
      {name: 'MO3323'},
      {name: 'KV3923'},
      {name: 'AD2320'}
    ]
  }
];

@Component({
  selector: 'app-lines-tree',
  templateUrl: './lines-tree.component.html',
  styleUrls: ['./lines-tree.component.css']
})
export class LinesTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<LineNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<LineNode>();
  loaded = false;

  constructor(private tcs: TranscounterService) {
    console.log(TREE_DATA);
    this.tcs.getLineTree().subscribe(lineTree => {
      console.log(lineTree);
      this.dataSource.data = lineTree;
      this.loaded = true;
    });
  }

  ngOnInit(): void {
    
  }

  hasChild = (_: number, node: LineNode) => !!node.children && node.children.length > 0;

}
