import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';

import blogPostsData from "@/blogPostsData.json";

import { parsePostUrl, sortPosts } from "@/helper"

import moment from 'moment';
import { Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCurrentPost } from '@/store/currentPostSlice';
import { useEffect } from 'react';
import { JSONPath } from 'jsonpath-plus';

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const sortedPosts = blogPostsData.posts.sort(sortPosts);  
const years = []
let last = ""
sortedPosts.forEach((p) => {
  let curr = moment(p.created, 'DD-MM-YYYY').toDate().getFullYear().toString();
  if (last !== curr) years.push(curr)
  last = curr;
})

export default function PostsYearly(props) {
  const { posts, categories } = blogPostsData;
  const currPost = useSelector(selectCurrentPost);
  const [expanded, setExpanded] = React.useState(["3", "2-1", "2", "1"]);
  const [selected, setSelected] = React.useState([]);
  const [lineageList, setLineageList] = React.useState([]);


  useEffect(() => {
    if (currPost) {
      let post = JSONPath({path: `$.[?(@.id === "${currPost.pid}")]`, json: posts})
      if (post.length > 0) {
        post = post[0]
        let year = moment(post.created, 'DD-MM-YYYY').toDate().getFullYear().toString();
        setExpanded(["1", `yearly-${year}`, "2", "2-1", "3", `cat-${post.category}`])
      }

      const ll = JSONPath({path: `$.[?(@.lineage === "${currPost.lineage}")]`, json: posts});
      ll.sort(sortPosts);
      setLineageList(ll);
    }
  }, [currPost])
  

  const handleToggle = (event, nodeIds) => {
    // console.log(nodeIds)
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      aria-label="customized"
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      sx={(theme) => { return { color: theme.palette.primary.main, marginBottom: theme.spacing(2), padding: theme.spacing(1), minHeight: 100, flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}

    >
      <StyledTreeItem nodeId="1" label="Posts">

        {
          years &&
          years.map((year, index) => {
            const yearPosts = []
            sortedPosts.forEach((p) => {
              let curr = moment(p.created, 'DD-MM-YYYY').toDate().getFullYear().toString();
              if (year === curr) yearPosts.push(p)
            })
            return(
              <StyledTreeItem key={`yearly-${year}`} nodeId={`yearly-${year}`} label={year}>
                {
                  yearPosts.map((p, index) => {
                    const currUrl = parsePostUrl(p.id, p.title)
                    return <Link 
                      key={currUrl + "/"}
                      href={currUrl}>
                        <Tooltip title={p.title} placement="right" arrow>
                          <div style={{ cursor: 'pointer'}}>
                            <Typography noWrap variant='caption' sx={(theme) => { return{ color: currPost && currPost.pid == p.id ? theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark : undefined }; }}>
                              {p.title}
                            </Typography>

                          </div>
                        </Tooltip>
                    </Link> 
                  })
                }
              </StyledTreeItem>
            )
          })
        }
      </StyledTreeItem>

      <StyledTreeItem nodeId="2" label="Lineage">
          {
            currPost &&
            <StyledTreeItem nodeId="2-1" label={currPost.lineage}>
              {
                lineageList.map((p, index) => {
                  const currUrl = parsePostUrl(p.id, p.title)
                  return <Link 
                    key={currUrl + "/"}
                    href={currUrl}>
                      <Tooltip title={p.title} placement="right" arrow>
                        <div style={{ cursor: 'pointer'}}>
                          <Typography noWrap variant='caption' sx={(theme) => { return{ color: currPost && currPost.pid == p.id ? theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark : undefined }; }}>
                            {p.title}
                          </Typography>
  
                        </div>
                      </Tooltip>
                  </Link> 
                })
              }
            </StyledTreeItem>
          }

      </StyledTreeItem>

      <StyledTreeItem nodeId="3" label="Categories">
        {
          categories &&
            categories.map((category, index) => {
                const postsInCategory = JSONPath({path: `$.[?(@.category === "${category}")]`, json: posts});
                return <StyledTreeItem key={`cat-${category}`} nodeId={`cat-${category}`} label={category}>
                  {
                    postsInCategory.map((p) => {
                      const currUrl = parsePostUrl(p.id, p.title)
                      return <Link 
                        key={currUrl + "/"}
                        href={currUrl}>
                          <Tooltip title={p.title} placement="right" arrow>
                            <div style={{ cursor: 'pointer'}}>
                              <Typography noWrap variant='caption' sx={(theme) => { return{ color: currPost && currPost.pid == p.id ? theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark : undefined }; }}>
                                {p.title}
                              </Typography>
      
                            </div>
                          </Tooltip>
                      </Link> 
                    })
                  }
                </StyledTreeItem>
              })
            
            }
      </StyledTreeItem>
    </TreeView>
  );
}